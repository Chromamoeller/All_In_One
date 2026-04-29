import { useNavigate } from "react-router-dom";

function Do2000() {
  const navigate = useNavigate();

  const lessonBasePath = "/lessons/do2000";

  const buttons = [
    { label: "Figuren", path: `${lessonBasePath}/Figuren` },
    { label: "Folgen", path: `${lessonBasePath}/Folgen` },
    { label: "Videos", path: `${lessonBasePath}/Videos` },
    { label: "Historie", path: `${lessonBasePath}/Historie` },
    { label: "Anwesenheiten", path: `${lessonBasePath}/Anwesenheiten` },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Donnerstag 20:00 Uhr
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Wähle einen Bereich aus
        </p>

        <div className="flex flex-col gap-4">
          {buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              onClick={() => navigate(button.path)}
              className="w-full py-4 rounded-2xl bg-blue-100 text-blue-900 text-lg font-semibold 
                         hover:bg-blue-200 active:scale-95 transition-all duration-200 
                         shadow-sm hover:shadow-md"
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Do2000;
