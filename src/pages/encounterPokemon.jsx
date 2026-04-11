import usePokemonStore from "../stores/pokemonStore";
import pokemonList from "../data/pokemonList_de_151";

function EncounterPokemon() {
  const selectedPokemon = usePokemonStore((state) => state.selectedPokemon);

  const getRandomPokemons = (count) => {
    const copy = [...pokemonList];
    const result = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      result.push(copy[randomIndex]);
      copy.splice(randomIndex, 1);
    }
    console.log(result);
    return result;
  };
  const randomPokemon = getRandomPokemons(1);

  return (
    <div className="flex h-full">
      <div className="flex flex-col h-full justify-center items-center flex-1 border border-black ">
        <div className="flex-1 w-full"> 1</div>
        <div className="flex-1 bg-green-500 w-full">
          <img src={`${selectedPokemon.linkToImg}`} alt="" />
          <p>{selectedPokemon.name}</p>
          <div>test</div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center items-center flex-1 border border-black">
        <div className="flex-1 bg-green-500 w-full">
          <img src={`${randomPokemon[0].linkToImg}`} alt="" />
          <p>{randomPokemon[0].name}</p>
        </div>
        <div className="flex-1 w-full">2</div>
      </div>
    </div>
  );
}

export default EncounterPokemon;
