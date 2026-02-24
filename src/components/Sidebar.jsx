import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClasses =
    "block px-4 py-2 rounded-lg transition-colors duration-900";

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-gray-200 p-5">
      <h2 className="text-xl font-semibold mb-8 tracking-wide">All In One</h2>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/side"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          Side Page
        </NavLink>
      </nav>

      <div className="mt-10 text-sm text-gray-400">© 2026</div>
    </aside>
  );
}
export default Sidebar;
