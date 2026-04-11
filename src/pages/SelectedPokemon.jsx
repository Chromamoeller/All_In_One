import usePokemonStore from "../stores/pokemonStore";
import { Link } from "react-router-dom";

function SelectedPokemon() {
  const selectedPokemon = usePokemonStore((state) => state.selectedPokemon);

  return (
    <div className="flex bg-gray-700 h-full">
      <div className="flex flex-col h-full justify-between  flex-1 border border-black">
        <div className="flex justify-center items-center  border h-full  border-black">
          Pokemon
        </div>
        <div className="flex justify-center items-center  border h-full  border-black">
          Pokemon
        </div>
        <div className="flex justify-center items-center  border h-full  border-black">
          Pokemon
        </div>
        <div className="flex justify-center items-center  border h-full  border-black">
          Pokemon
        </div>
        <div className="flex justify-center items-center  border h-full  border-black">
          Pokemon
        </div>
        <div className="flex justify-center items-center  border h-full  border-black">
          Pokemon
        </div>
      </div>
      <div className="flex items-center flex-3">
        <Link to="/encounterPokemon">
          <div className="flex items-center flex-1 rounded-4xl border border-black h-140 mx-5">
            <p className="text-center text-white text-3xl ">
              Wildes Pokemon Fangen/Kämpfen
            </p>
          </div>
        </Link>
        <div className="flex items-center justify-center flex-1 rounded-4xl border border-black h-140 mx-5">
          <p className=" text-white text-3xl ">Trainerkampf</p>
        </div>
        <div className="flex items-center justify-center flex-1 rounded-4xl border border-black h-140 mx-5">
          <p className="text-center text-white text-3xl ">Arena Kampf</p>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center relative items-center bg-white h-55">
          <img
            src={selectedPokemon.linkToImg}
            className="w-full h-full object-contain"
          />
          <p className="absolute bottom-1 left-1 text-black font-semibold">
            {selectedPokemon.name}
          </p>
        </div>
        <div className="flex justify-center items-center mt-50 h-35 border">
          <p>Items</p>
        </div>
      </div>
    </div>
  );
}

export default SelectedPokemon;
