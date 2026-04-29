import DancePage from "../../pages/DancePage";
import LessonsPage from "../../pages/LessonsPage";
import Do2000 from "../../pages/Do2000/Do2000";
import So1800 from "../../pages/SO1800/So1800";
import Anwesenheiten from "../../pages/SO1800/Anwesenheiten";
import Figuren from "../../pages/SO1800/Figuren";
import Historie from "../../pages/SO1800/Historie";
import Videos from "../../pages/SO1800/Videos";
import Folgen from "../../pages/SO1800/Folgen";
import AnwesenheitenDO from "../../pages/DO2000/Anwesenheiten";
import FigurenDO from "../../pages/DO2000/Figuren";
import HistorieDO from "../../pages/DO2000/Historie";
import VideosDO from "../../pages/DO2000/Videos";
import FolgenDO from "../../pages/DO2000/Folgen";

export const lessonRouter = [
  { path: "/dance", element: <DancePage /> },
  { path: "/lessons", element: <LessonsPage /> },
  { path: "/lessons/do2000", element: <Do2000 /> },
  { path: "/lessons/so1800", element: <So1800 /> },
  { path: "/lessons/so1800/figuren", element: <Figuren /> },
  { path: "/lessons/so1800/folgen", element: <Folgen /> },
  { path: "/lessons/so1800/videos", element: <Videos /> },
  { path: "/lessons/so1800/historie", element: <Historie /> },
  { path: "/lessons/so1800/anwesenheiten", element: <Anwesenheiten /> },
  { path: "/lessons/do2000/figuren", element: <FigurenDO /> },
  { path: "/lessons/do2000/folgen", element: <FolgenDO /> },
  { path: "/lessons/do2000/videos", element: <VideosDO /> },
  { path: "/lessons/do2000/historie", element: <HistorieDO /> },
  { path: "/lessons/do2000/anwesenheiten", element: <AnwesenheitenDO /> },
];
