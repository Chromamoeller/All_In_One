import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar />

      <main className="ml-72 min-h-screen overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
