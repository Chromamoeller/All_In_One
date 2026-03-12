import { useState, useEffect, useActionState } from "react";
import FigureCard from "../components/dance/FigureCard";
function DancePage() {
  const danceStyles = ["Standard", "Latein"];

  const lateinTänze = [
    "Cha-Cha-Cha",
    "Rumba",
    "Jive",
    "Samba",
    "Salsa",
    "Paso Doble",
  ];
  const standardTänze = [
    "Langsamer Walzer",
    "Wiener Walzer",
    "Quickstepp",
    "Slowfox",
    "Tango",
  ];

  const [selectedDanceStyle, setSelectedDanceStyle] = useState("");
  const [selectedDance, setSelectedDance] = useState("");
  const [danceOptions, setDanceOptions] = useState([]);
  const [gender] = useState(["Leader", "Follower"]);

  useEffect(() => {
    if (selectedDanceStyle === "Standard") {
      setDanceOptions(standardTänze);
    } else if (selectedDanceStyle === "Latein") {
      setDanceOptions(lateinTänze);
    } else {
      setDanceOptions([]);
    }
  }, [selectedDanceStyle]);

  return (
    <div className="flex p-4 w-full h-full bg-red-300">
      <div className="flex flex-col items-center justify-center bg-blue-200 w-full p-4">
        <div className="flex flex-1 w-full justify-center gap-20 items-center bg-amber-400">
          <div className="flex w-full h-full  ">
            <div className="flex justify-center items-center flex-col  flex-1">
              <label className="block text-lg font-medium text-gray-700 mb-1 ml-3">
                Tanzart
              </label>
              <select
                className=" w-60 rounded-lg  bg-white px-4 py-2 shadow-sm"
                value={selectedDanceStyle}
                onChange={(e) => setSelectedDanceStyle(e.target.value)}
              >
                <option value="">Bitte Tanzstil wählen</option>
                {danceStyles.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center items-center flex-col  flex-1">
              <label className="block text-lg font-medium text-gray-700 mb-1 ml-3">
                Tanz
              </label>
              <select
                onChange={(e) => setSelectedDance(e.target.value)}
                className="w-60 rounded-lg  bg-white px-4 py-2 shadow-sm"
              >
                {selectedDanceStyle === "" ? (
                  <option value="">Bitte erst Tanzstil wählen</option>
                ) : null}

                {danceOptions.map((dance) => (
                  <option key={dance} value={dance}>
                    {dance}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center items-center flex-col  flex-1">
              <label className="block text-lg font-medium text-gray-700 mb-1 ml-3 ">
                Geschlecht
              </label>
              <select className="w-60 rounded-lg  bg-white px-4 py-2 shadow-sm">
                {gender.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full bg-amber-950 justify-center">
          {selectedDance && <FigureCard dance={selectedDance} />}
        </div>
      </div>
    </div>
  );
}

export default DancePage;
