import { useState } from "react";

function DancePage() {
  const [danceStyle, setDanceStyle] = useState(["Standard", "Latein"]);
  const [gender, setGender] = useState(["Leader", "Follower"]);

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

  return (
    <>
      <div className="flex p-4 w-full h-full bg-red-300">
        <div className="flex flex-col items-center justify-center bg-blue-200 w-full p-4">
          <div className="flex flex-1 w-full justify-center gap-20 items-center  bg-amber-400">
            <div className="flex gap-20">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanzart
                </label>
                <select className="w-full rounded-lg border-gray-300 bg-white px-4 py-2 shadow-sm ">
                  {danceStyle.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tanz
                </label>
                <select className="w-full rounded-lg border-gray-300 bg-white px-4 py-2 shadow-sm">
                  {lateinTänze.map((dance) => (
                    <option key={dance} value={dance}>
                      {dance}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Geschlecht
                </label>
                <select className="w-full rounded-lg border-gray-300 bg-white px-4 py-2 shadow-sm">
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
            <p className="p-5 text-white">Alle Figuren</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DancePage;
