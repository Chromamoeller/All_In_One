import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../data/login/courses";

function LoginPage() {
  const [courseName, setCourseName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const course = courses[courseName];

    if (!course) {
      alert("Kurs nicht gefunden");
      return;
    }

    localStorage.setItem("loggedInCourse", courseName);
    navigate("/kurs");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f3ee] p-4">
      <div className="w-full max-w-md rounded-3xl bg-white/80 p-8 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
          Kurs Login
        </h1>

        <div className="flex flex-col gap-4">
          <input
            placeholder="Kursname (z.B. Do2000)"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-[#fbfaf8] px-4 py-3 text-slate-700 outline-none transition focus:border-blue-200"
          />

          <input
            placeholder="Passwort"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-[#fbfaf8] px-4 py-3 text-slate-700 outline-none transition focus:border-blue-200"
          />

          <button
            onClick={handleLogin}
            className="mt-2 rounded-2xl bg-[#c7d8f4] px-4 py-3 font-medium text-slate-800 transition hover:bg-[#b6c9ee]"
          >
            Einloggen
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Zugriff nur für Kursteilnehmer
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
