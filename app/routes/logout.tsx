import { Form, redirect } from "react-router";
import type { Route } from "./+types/login";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { destroySession, getSession } from "~/sessions";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export async function Action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export default function LoginRoute({}: Route.ComponentProps) {
  return (
    <div className="mx-auto w-full max-w-md py-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Logout</h1>
        <p className="text-sm text-muted-foreground">
          Logout from Your Account
        </p>
      </header>

      <Form method="post" className=" space-y-4">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </Form>
    </div>
  );
}
