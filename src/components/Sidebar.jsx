import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    { to: "/", label: "Dashboard" },
    { to: "/devnotes", label: "DevNotes" },
    { to: "/side", label: "Side Page" },
    { to: "/pokemon", label: "Pokemon" },
    { to: "/dance", label: "Tanzen" },
    { to: "/finanz", label: "Finanzen" },
    { to: "/herbalism", label: "Herbalism" },
    { to: "/monsterhunter", label: "Monster Hunter" },
    { to: "/hrhub", label: "HR Hub" },
    { to: "/spotify", label: "Spotify" },
  ];

  const getNavLinkClass = ({ isActive }) =>
    [
      "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
      isActive
        ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
        : "text-zinc-400 hover:bg-zinc-900 hover:text-white",
    ].join(" ");

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950 px-5 py-6 ">
      <div className="sticky top-6">
        <div className="mb-8 border-b border-zinc-800 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Portfolio
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            All In One
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Projekte, Ideen und technische Lösungen
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={getNavLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-zinc-800 pt-6">
          <p className="text-xs text-zinc-500">© 2026 Christian</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
