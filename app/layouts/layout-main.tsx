import { Outlet } from "react-router";

export default function LayoutMain() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <nav>
        <div className="flex gap-2 items-center">
          <img src="/seliya.svg" alt="Seliya Logo" className="size-14" />
          <h1 className="font-bold">Seliya Sambal</h1>
        </div>
      </nav>

      <Outlet />

      <footer>
        <p>© 2023-{year} Seliya </p>
      </footer>
    </div>
  );
}
