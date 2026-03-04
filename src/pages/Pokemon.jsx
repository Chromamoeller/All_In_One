import PokemonCard from "../components/PokemonCard";

function Pokemon() {
  return (
    <>
      <div className="flex flex-wrap">
        <PokemonCard id="001" name="Bulbasaur" type="grass" />
        <PokemonCard id="004" name="Charmender" type="fire" />
      </div>
    </>
  );
}
export default Pokemon;
