export default function PokemonCard({ id, name, type, sprite, text }) {
  const typeStyles = {
    normal: "from-stone-300 to-stone-400 border-stone-500",
    fire: "from-orange-400 to-red-500 border-red-600",
    water: "from-sky-400 to-blue-500 border-blue-600",
    electric: "from-yellow-300 to-amber-400 border-amber-500",
    grass: "from-green-400 to-emerald-500 border-emerald-600",
    ice: "from-cyan-200 to-cyan-400 border-cyan-500",
    fighting: "from-red-700 to-red-900 border-red-900 text-white",
    poison: "from-purple-500 to-purple-700 border-purple-800 text-white",
    ground: "from-amber-500 to-yellow-600 border-yellow-700",
    flying: "from-indigo-200 to-indigo-400 border-indigo-500",
    psychic: "from-pink-400 to-pink-600 border-pink-700",
    bug: "from-lime-400 to-lime-500 border-lime-600",
    rock: "from-yellow-700 to-yellow-900 border-yellow-900 text-white",
    ghost: "from-violet-700 to-violet-900 border-violet-900 text-white",
    dragon: "from-indigo-600 to-indigo-800 border-indigo-900 text-white",
    default: "from-gray-300 to-gray-400 border-gray-500",
  };

  const style = typeStyles[type] || typeStyles.default;

  return (
    <div
      className={`
        w-64 h-96 rounded-2xl p-3 m-3 
        bg-gradient-to-br ${style}
        border-4 shadow-xl shadow-black/40 
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold text-lg drop-shadow-sm">#{id}</p>
        <p className="font-bold text-xl tracking-wide drop-shadow-sm">
          {name[0].toUpperCase() + name.slice(1)}
        </p>

        {/* Typ-Badge */}
        <span
          className="
          px-3 py-1 rounded-full text-xs font-bold 
          bg-white/40 backdrop-blur-sm border border-white/60
        "
        >
          {type.toUpperCase()}
        </span>
      </div>

      {/* Sprite-Fenster */}
      <div
        className="
        flex justify-center items-center 
        bg-white/60 backdrop-blur-sm 
        border border-white/70 rounded-xl shadow-inner 
        h-40 mb-3
      "
      >
        <img
          src={sprite}
          alt={name}
          className="h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Textbox wie im TCG */}
      <div
        className="
        flex-1 bg-white/70 backdrop-blur-sm 
        border border-gray-300 rounded-xl p-3 shadow-inner
      "
      >
        <p className="text-sm text-gray-700 leading-tight">
          {text || "Ein mysteriöses Pokémon, über das wenig bekannt ist."}
        </p>
      </div>

      {/* Footer */}
      <div className="text-[10px] text-gray-700 mt-2 text-right">
        © 2026 Pokémon / Nintendo
      </div>
    </div>
  );
}
