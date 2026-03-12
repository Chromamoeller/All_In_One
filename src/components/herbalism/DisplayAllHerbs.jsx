import HerbCounter from "./HerbCounter";

function DisplayAllHerbs() {
  return (
    <div
      className=" w-full h-30 px-6 py-4 rounded-2xl shadow-xl
                    bg-white/40 backdrop-blur-md border border-white/50
                    flex items-center gap-6
                    text-emerald-900"
    >
      {/* zarte Hintergrund-Bubbles */}
      <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 rounded-full bg-emerald-300/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 right-4 w-28 h-28 rounded-full bg-lime-300/30 blur-2xl" />

      {/* Titel (optional) */}
      <span className="hidden md:inline text-lg font-semibold text-emerald-800 mr-2">
        Deine Kräuter:
      </span>

      {/* Counters als Chips */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <HerbCounter herb="🍁" count={5} />
        </div>
        <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <HerbCounter herb="🍂" count={3} />
        </div>
        <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <HerbCounter herb="🌿" count={7} />
        </div>
        <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <HerbCounter herb="🌱" count={7} />
        </div>
      </div>
    </div>
  );
}

export default DisplayAllHerbs;
