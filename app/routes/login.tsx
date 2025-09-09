import { Form } from "react-router";
import type { Route } from "./+types/login";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
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
