import { getSession } from "~/sessions";
import type { Route } from "./+types/dashboard";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard" }];
}
export async function loader({ request }: Route.ClientLoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("token")) {
    return redirect("/login");
  }

  const token = session.get("token");

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/me`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const user: UserAuthMe = await response.json();
  return { user };
}

export default function DashboardRoute({}: Route.ComponentProps) {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
