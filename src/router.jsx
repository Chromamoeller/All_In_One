import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Mainpage from "./pages/Mainpage";
import Sidepage from "./pages/Sidepage";
import Pokemon from "./pages/Pokemon";
import DancePage from "./pages/DancePage";
import FinanzPage from "./pages/FinanzPage";
import Herbalism from "./pages/Herbalism";
import Monsterhunter from "./pages/Monsterhunter";
import HRHub from "./pages/HRHub";
import Spotify from "./pages/Spotify";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Mainpage /> },
      { path: "/side", element: <Sidepage /> },
      { path: "/pokemon", element: <Pokemon /> },
      { path: "/dance", element: <DancePage /> },
      { path: "/finanz", element: <FinanzPage /> },
      { path: "/herbalism", element: <Herbalism /> },
      { path: "/monsterhunter", element: <Monsterhunter /> },
      { path: "/hrhub", element: <HRHub /> },
      { path: "/spotify", element: <Spotify /> },
    ],
  },
]);
