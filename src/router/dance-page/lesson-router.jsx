import DancePage from "../../pages/DancePage";
import LoginPage from "../../pages/LoginPage";
import KursPage from "../../pages/KursPage";

export const lessonRouter = [
  { path: "/dance", element: <DancePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/kurs", element: <KursPage /> },
  { path: "/kurs", element: <KursPage /> },
  { path: "/figuren", element: <div>Figuren Seite</div> },
  { path: "/folgen", element: <div>Folgen Seite</div> },
  { path: "/anwesenheiten", element: <div>Anwesenheiten Seite</div> },
  { path: "/historie", element: <div>Historie Seite</div> },
  { path: "/videos", element: <div>Videos Seite</div> },
];
