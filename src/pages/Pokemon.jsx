import PokemonCard from "../components/pokemon/PokemonCard";
import allPokemon from "../data/pokemonList";
import { useMemo } from "react";

function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function PokemonList() {
  const shuffledPokemon = useMemo(() => shuffleArray(allPokemon), []);

  return (
    <div className="flex flex-wrap">
      {shuffledPokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types?.[0] ?? "unknown"}
          sprite={pokemon.sprite}
        />
      ))}
    </div>
  );
}

export default PokemonList;
