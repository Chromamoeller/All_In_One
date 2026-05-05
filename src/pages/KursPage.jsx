import { useNavigate } from "react-router-dom";
import { courses } from "../data/login/courses";

function KursPage() {
  const navigate = useNavigate();

  const loggedInCourse = localStorage.getItem("loggedInCourse");
  const course = courses[loggedInCourse];

  if (!course) {
    return <p>Bitte einloggen</p>;
  }

  const menuItems = [
    { label: "Figuren", path: "/figuren" },
    { label: "Folgen", path: "/folgen" },
    { label: "Anwesenheiten", path: "/anwesenheiten" },
    { label: "Historie", path: "/historie" },
    { label: "Videos", path: "/videos" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ee] p-6 text-slate-800">
      <div className="mx-auto max-w-xl">
        {/* HEADER */}
        <div className="mb-6 rounded-3xl bg-white/80 p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">
            {course.welcomeText}
          </h1>

          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <p>
              <span className="font-medium">Kurs:</span> {course.courseName}
            </p>
            <p>
              <span className="font-medium">Tag:</span> {course.day}
            </p>
            <p>
              <span className="font-medium">Uhrzeit:</span> {course.time}
            </p>
          </div>
        </div>

        {/* BUTTON LISTE */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="w-full rounded-2xl bg-[#c7d8f4] px-4 py-4 text-left font-medium text-slate-800 transition hover:bg-[#b6c9ee]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KursPage;
