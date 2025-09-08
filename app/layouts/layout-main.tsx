import { Link, Outlet } from "react-router";

const navigationLinks = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/register", text: "Register" },
  { to: "/login", text: "Login " },
  { to: "/dashboard", text: "Dashboard " },
];

export default function LayoutMain() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex min-h-screen flex-col ">
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/seliya.svg" alt="Seliya Logo" className="w-12 h-12" />
          <h1 className="font-bold text-xl text-gray-800">Seliya Sambal</h1>
        </Link>
        <ul className="flex gap-6">
          {navigationLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 px-2 py-1 rounded"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-[1]">
        <Outlet />
      </main>

      <footer className="p-2 bg-red-100">
        <p>© 2023 - {year} Seliya </p>
      </footer>
    </div>
  );
}
