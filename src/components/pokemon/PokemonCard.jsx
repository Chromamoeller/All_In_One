export default function PokemonCard(props) {
  const color = () => {
    switch (props.type) {
      case "normal":
        return "bg-stone-300";

      case "fire":
        return "bg-orange-400";

      case "water":
        return "bg-sky-400";

      case "electric":
        return "bg-yellow-300";

      case "grass":
        return "bg-green-400";

      case "ice":
        return "bg-cyan-200";

      case "fighting":
        return "bg-red-700 text-white";

      case "poison":
        return "bg-purple-500 text-white";

      case "ground":
        return "bg-amber-500";

      case "flying":
        return "bg-indigo-200";

      case "psychic":
        return "bg-pink-400";

      case "bug":
        return "bg-lime-400";

      case "rock":
        return "bg-yellow-700 text-white";

      case "ghost":
        return "bg-violet-700 text-white";

      case "dragon":
        return "bg-indigo-600 text-white";

      default:
        return "bg-gray-300";
    }
  };
  return (
    <div
      id="card"
      className={`flex flex-col justify-between w-60 h-80 ${color()} rounded-lg border shadow-2xl p-2 m-2`}
    >
      <div id="header" className="flex flex-1 justify-between ">
        <div>
          <p>#{props.id}</p>
        </div>
        <div>
          <p>{props.name}</p>
        </div>
        <div>
          <p>{props.type}</p>
        </div>
      </div>
      <div id="sprite" className="flex-5">
        <img
          className="w-full max-h-40 object-contain border border-gray-400 shadow-md rounded-lg"
          src={props.sprite}
          alt={props.name}
        />
      </div>
      <div
        id="text"
        className="flex-4 p-2 border border-gray-400 shadow-md rounded-lg mt-1"
      >
        <p className="text-sm text-gray-600">{props.text}</p>
      </div>
      <div id="footer" className="flex-1 flex items-end ">
        <p className="text-sm text-gray-600">Copyright © 2026</p>
      </div>
    </div>
  );
}
