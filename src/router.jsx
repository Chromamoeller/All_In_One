import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Mainpage from "./pages/Mainpage";
import Sidepage from "./pages/Sidepage";
import Pokemon from "./pages/Pokemon";
import DancePage from "./pages/DancePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Mainpage /> },
      { path: "/side", element: <Sidepage /> },
      { path: "/pokemon", element: <Pokemon /> },
      { path: "/dance", element: <DancePage /> },
    ],
  },
]);
