import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar className="flex-1" />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
