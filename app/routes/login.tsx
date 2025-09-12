import { Form, redirect } from "react-router";
import type { Route } from "./+types/login";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export async function clientAction({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const loginBody = {
    email,
    password,
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginBody),
    }
  );
  const result = await response.json();

  console.log({ result });

  return redirect("/dashboard ");
}

export default function LoginRoute({}: Route.ComponentProps) {
  return (
    <div className="mx-auto w-full max-w-md py-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Continue to Your Account
        </p>
      </header>

      <Form method="post" className=" space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullName">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>
      </Form>
    </div>
  );
}
