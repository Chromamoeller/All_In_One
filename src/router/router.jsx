import { createBrowserRouter } from "react-router-dom";
import { lessonRouter } from "./dance-page/lesson-router";
import { pokemonRouter } from "./pokemon-game/pokemon-router";
import MainLayout from "../layouts/MainLayout";

import Mainpage from "../pages/Mainpage";

import FinanzPage from "../pages/FinanzPage";
import Herbalism from "../pages/Herbalism";
import Monsterhunter from "../pages/Monsterhunter";
import HRHub from "../pages/HRHub";
import Spotify from "../pages/Spotify";
import DevNotes from "../pages/DevNotes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Mainpage /> },
      ...lessonRouter,
      ...pokemonRouter,
      { path: "/finanz", element: <FinanzPage /> },
      { path: "/herbalism", element: <Herbalism /> },
      { path: "/monsterhunter", element: <Monsterhunter /> },
      { path: "/hrhub", element: <HRHub /> },
      { path: "/spotify", element: <Spotify /> },
      { path: "/devnotes", element: <DevNotes /> },
    ],
  },
]);
