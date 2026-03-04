export default function PokemonCard(props) {
  const color = () => {
    switch (props.type) {
      case "fire":
        return "bg-red-300";
      case "water":
        return "bg-blue-300";
      case "grass":
        return "bg-green-300";
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
