import slowWaltz from "../../data/dances/standard/slowWaltz";
import tango from "../../data/dances/standard/tango";

const DATASETS = {
  "Langsamer Walzer": slowWaltz,
  Tango: tango,
};

function FigureCard({ dance, role }) {
  const dataset = DATASETS[dance];

  if (!dataset) {
    return (
      <div className="text-white text-lg p-6">
        Keine Figuren für diesen Tanz gefunden.
      </div>
    );
  }

  const normalizedRole = role?.toLowerCase();
  const figures = dataset[normalizedRole] ?? [];

  if (figures.length === 0) {
    return (
      <div className="text-white text-lg p-6">
        Keine Figuren für diese Rolle vorhanden.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap justify-center gap-8 py-6">
      {figures.map((fig) => (
        <div
          key={fig.id ?? fig.name}
          className="
            w-64 p-5 rounded-2xl
            bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-500
            shadow-xl shadow-emerald-900/40
            border border-white/20
            transform transition-all duration-300
            hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
            hover:shadow-cyan-500/40
            text-white
          "
        >
          <p className="text-2xl font-bold tracking-wide drop-shadow-sm mb-2">
            {fig.name}
          </p>

          <div className="h-1 w-20 bg-white/60 rounded mb-3"></div>

          <p className="text-white/90 text-sm">Figur-ID: {fig.id}</p>
        </div>
      ))}
    </div>
  );
}

export default FigureCard;
