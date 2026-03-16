import { useState, useMemo } from "react";
import FigureCard from "../components/dance/FigureCard";

function DancePage() {
  const danceStyles = ["Standard", "Latein"];

  const dances = {
    Standard: [
      "Langsamer Walzer",
      "Wiener Walzer",
      "Quickstepp",
      "Slowfox",
      "Tango",
    ],
    Latein: ["Cha-Cha-Cha", "Rumba", "Jive", "Samba", "Paso Doble"],
  };

  const [selectedDanceStyle, setSelectedDanceStyle] = useState("");
  const [selectedDance, setSelectedDance] = useState("");
  const [selectedRole, setSelectedRole] = useState("Leader");

  const danceOptions = useMemo(() => {
    return dances[selectedDanceStyle] ?? [];
  }, [selectedDanceStyle]);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Tanzart */}
          <div className="flex flex-col">
            <label className="text-indigo-900 text-sm font-semibold mb-2">
              Tanzart
            </label>
            <select
              className="rounded-xl bg-white px-4 py-3 border border-indigo-300 
              shadow-md text-indigo-900 
              focus:ring-4 focus:ring-indigo-400 focus:border-indigo-500 
              transition-all duration-200"
              value={selectedDanceStyle}
              onChange={(e) => {
                const newStyle = e.target.value;
                setSelectedDanceStyle(newStyle);
                // Auto-select first dance when style is selected
                if (newStyle && dances[newStyle]?.length > 0) {
                  setSelectedDance(dances[newStyle][0]);
                } else {
                  setSelectedDance("");
                }
              }}
            >
              <option value="">Bitte Tanzstil wählen</option>
              {danceStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

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
              disabled={!selectedDanceStyle}
            >
              {!selectedDanceStyle && (
                <option value="">Bitte erst Tanzstil wählen</option>
              )}

              {danceOptions.map((dance) => (
                <option key={dance} value={dance}>
                  {dance}
                </option>
              ))}
            </select>
          </div>

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
