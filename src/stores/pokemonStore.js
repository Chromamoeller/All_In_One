import { create } from "zustand";

const usePokemonStore = create((set) => ({
  // STATE
  selectedPokemon: null,
  pokemonTeam: [],
  caughtPokemons: [],
  seenPokemonIds: [],

  // ACTIONS
  selectPokemon: (pokemon) => set({ selectedPokemon: pokemon }),

  catchPokemon: (pokemon) =>
    set((state) => ({
      caughtPokemons: [...state.caughtPokemons, pokemon],
    })),

  addSeenPokemon: (id) =>
    set((state) => ({
      seenPokemonIds: [...state.seenPokemonIds, id],
    })),
}));

export default usePokemonStore;
