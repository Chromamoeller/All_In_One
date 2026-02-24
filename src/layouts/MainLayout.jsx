import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
