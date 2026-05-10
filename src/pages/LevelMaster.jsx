import pokemonList from "../data/pokemon/pokemonAPI/pokemonList_de_151";
import { useState } from "react";
import attackPool from "../data/pokemon/pokemonAPI/pokemonAttacks";
import usePokemonStore from "../stores/pokemonStore";
import { Link } from "react-router-dom";

function LevelMaster() {
  const selectedPokemon = usePokemonStore((state) => state.selectPokemon);

  function addAttackByType(pkm) {
    Object.keys(attackPool).forEach((attacktype) => {
      if (attacktype == pkm.typ[0]) {
        pkm.attacks = attackPool[attacktype];
      }
    });
  }

  const [pokemons] = useState(() => {
    const getRandomPokemons = (count) => {
      const copy = [...pokemonList];
      const result = [];

      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy[randomIndex]);
        addAttackByType(copy[randomIndex]);
        copy.splice(randomIndex, 1);
      }
      console.log(result);
      return result;
    };
    return getRandomPokemons(3);
  });
  const typeStyles = {
    Normal: "bg-stone-500 border-stone-500",
    Feuer: "bg-red-500 border-red-600",
    Wasser: "bg-blue-500 border-blue-600",
    Elektro: "bg-amber-400 border-amber-500",
    Pflanze: "bg-emerald-500 border-emerald-600",
    Eis: "bg-cyan-400 border-cyan-500",
    Kampf: "bg-red-900 border-red-900 text-white",
    Gift: "bg-purple-700 border-purple-800 text-white",
    Boden: "bg-yellow-600 border-yellow-700",
    Flug: "bg-indigo-400 border-indigo-500",
    Psycho: "bg-pink-600 border-pink-700",
    Käfer: "bg-lime-500 border-lime-600",
    Gestein: "bg-yellow-900 border-yellow-900 text-white",
    Geist: "bg-violet-900 border-violet-900 text-white",
    Drache: "bg-indigo-800 border-indigo-900 text-white",
    default: "bg-gray-400 border-gray-500",
  };
  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-700">
      <div className="flex justify-around items-center w-350 h-150 bg-blue-400 shadow-xl">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`relative h-50 w-50 border-2 border-black rounded ${typeStyles[pokemons[0].typ[0]]}`}
          >
            <Link to="/levelmaster/2">
              <img
                onClick={() => selectedPokemon(pokemons[0])}
                src={pokemons[0].linkToImg}
                className="w-full h-full object-contain"
              />
            </Link>
            <p className="absolute bottom-1 left-1 text-black font-semibold">
              {pokemons[0].name}
            </p>
          </div>
          <div className="flex justify-between text-white items-center bg-black h-20 w-50">
            <div className="ml-4">
              {pokemons[0].attacks.map((attack) => (
                <p key={attack.name}>{attack.name}</p>
              ))}
            </div>
            <div className="mr-4">
              {pokemons[0].attacks.map((attack) => (
                <p key={attack.name}>{attack.ap}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div
            className={`relative h-50 w-50 border-2 border-black rounded ${typeStyles[pokemons[1].typ[0]]}`}
          >
            <Link to="/levelmaster/2">
              <img
                onClick={() => selectedPokemon(pokemons[1])}
                src={pokemons[1].linkToImg}
                className="w-full h-full object-contain"
              />
            </Link>
            <p className="absolute bottom-1 left-1 text-black font-semibold">
              {pokemons[1].name}
            </p>
          </div>

          <div className="flex justify-between text-white items-center bg-black h-20 w-50">
            <div className="ml-4">
              {pokemons[1].attacks.map((attack) => (
                <p key={attack.name}>{attack.name}</p>
              ))}{" "}
            </div>
            <div className="mr-4">
              {pokemons[1].attacks.map((attack) => (
                <p key={attack.name}>{attack.ap}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div
            className={`relative h-50 w-50 border-2 border-black rounded ${typeStyles[pokemons[2].typ[0]]}`}
          >
            <Link to="/levelmaster/2">
              <img
                onClick={() => selectedPokemon(pokemons[2])}
                src={pokemons[2].linkToImg}
                className="w-full h-full object-contain"
              />
            </Link>
            <p className="absolute bottom-1 left-1 text-black font-semibold">
              {pokemons[2].name}
            </p>
          </div>

          <div className="flex justify-between text-white items-center bg-black h-20 w-50">
            <div className="ml-4">
              {pokemons[2].attacks.map((attack) => (
                <p key={attack.name}>{attack.name}</p>
              ))}
            </div>
            <div className="mr-4">
              {pokemons[2].attacks.map((attack) => (
                <p key={attack.name}>{attack.ap}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelMaster;
