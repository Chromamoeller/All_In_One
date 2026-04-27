import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Mainpage from "./pages/Mainpage";
import Sidepage from "./pages/Sidepage";

import Pokemon from "./pages/Pokemon";
import SelectedPokemon from "./pages/SelectedPokemon";
import EncounterPokemon from "./pages/encounterPokemon";

import DancePage from "./pages/DancePage";
import LessonsPage from "./pages/LessonsPage";
import Do2000 from "./pages/Do2000";
import So1800 from "./pages/So1800";

import FinanzPage from "./pages/FinanzPage";
import Herbalism from "./pages/Herbalism";
import Monsterhunter from "./pages/Monsterhunter";
import HRHub from "./pages/HRHub";
import Spotify from "./pages/Spotify";
import DevNotes from "./pages/DevNotes";
import LevelMaster from "./pages/LevelMaster";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Mainpage /> },
      { path: "/side", element: <Sidepage /> },

      { path: "/pokemon", element: <Pokemon /> },
      { path: "/levelmaster", element: <LevelMaster /> },
      { path: "/levelmaster/2", element: <SelectedPokemon /> },
      { path: "/encounterPokemon", element: <EncounterPokemon /> },

      { path: "/dance", element: <DancePage /> },
      { path: "/lessons", element: <LessonsPage /> },
      { path: "/lessons/do2000", element: <Do2000 /> },
      { path: "/lessons/so1800", element: <So1800 /> },

      { path: "/finanz", element: <FinanzPage /> },
      { path: "/herbalism", element: <Herbalism /> },
      { path: "/monsterhunter", element: <Monsterhunter /> },
      { path: "/hrhub", element: <HRHub /> },
      { path: "/spotify", element: <Spotify /> },
      { path: "/devnotes", element: <DevNotes /> },
    ],
  },
]);
