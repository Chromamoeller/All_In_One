import { useState } from "react";
import FigureCard from "../components/dance/FigureCard";

function DancePage() {
  const danceOptions = [
    "Langsamer Walzer",
    "Wiener Walzer",
    "Quickstepp",
    "Slowfox",
    "Tango",
    "Cha-Cha-Cha",
    "Rumba",
    "Jive",
    "Samba",
    "Paso Doble",
  ];

  const [selectedDance, setSelectedDance] = useState("");
  const [selectedRole, setSelectedRole] = useState("Leader");

  return (
    <div
      className="w-full min-h-screen 
      bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 
      flex justify-center items-start p-10"
    >
      <div
        className="w-full max-w-4xl 
        bg-white/80 backdrop-blur-xl 
        rounded-3xl shadow-2xl p-10 
        border border-white/40 
        transition-all duration-300"
      >
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-indigo-900 text-center mb-10 tracking-tight drop-shadow-sm">
          Tanzfiguren auswählen
        </h1>

        {/* Auswahlfelder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Tanz */}
          <div className="flex flex-col">
            <label className="text-indigo-900 text-sm font-semibold mb-2">
              Tanz
            </label>
            <select
              className="rounded-xl bg-white px-4 py-3 border border-indigo-300 
              shadow-md text-indigo-900 
              focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 
              transition-all duration-200"
              value={selectedDance}
              onChange={(e) => setSelectedDance(e.target.value)}
            >
              <option value="">Bitte Tanz auswählen</option>
              {danceOptions.map((dance) => (
                <option key={dance} value={dance}>
                  {dance}
                </option>
              ))}
            </select>
          </div>

          {/* Rolle */}

          {/* Rolle */}
          <div className="flex flex-col">
            <label className="text-indigo-900 text-sm font-semibold mb-2">
              Rolle
            </label>
            <select
              className="rounded-xl bg-white px-4 py-3 border border-indigo-300 
              shadow-md text-indigo-900 
              focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 
              transition-all duration-200"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="Leader">Leader</option>
              <option value="Follower">Follower</option>
            </select>
          </div>
        </div>

        {/* Figurenanzeige */}
        <div
          className="bg-white/70 backdrop-blur-md rounded-2xl p-8
          border border-indigo-200 shadow-inner"
        >
          {selectedDance ? (
            <FigureCard
              key={`${selectedDance}-${selectedRole}`}
              dance={selectedDance}
              role={selectedRole.toLowerCase()}
            />
          ) : (
            <p className="text-indigo-700 text-center text-lg">
              Bitte wähle einen Tanz aus.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DancePage;
