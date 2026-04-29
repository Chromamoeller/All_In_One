import SelectedPokemon from "../../pages/SelectedPokemon";
import EncounterPokemon from "../../pages/EncounterPokemon";
import LevelMaster from "../../pages/LevelMaster";

export const pokemonRouter = [
  { path: "/levelmaster", element: <LevelMaster /> },
  { path: "/levelmaster/2", element: <SelectedPokemon /> },
  { path: "/encounter-pokemon", element: <EncounterPokemon /> },
];
