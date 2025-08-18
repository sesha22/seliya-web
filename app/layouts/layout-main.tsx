import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <div>
      <nav>
        <h1>Seliya Sambal</h1>
        <div>
          <img src="/seliya.svg" alt="Seliya Logo" />
        </div>
      </nav>
      <Outlet />
      <footer>
        <p>© 2023 Seliya </p>
      </footer>
    </div>
  );
}
