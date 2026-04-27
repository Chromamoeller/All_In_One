function DevNotes() {
  const pages = [
    {
      path: "/",
      name: "Dashboard",
      description: "Main dashboard with overview cards",
      icon: "🏠",
    },
    {
      path: "/devnotes",
      name: "Dev Notes",
      description: "Project portfolio and documentation",
      icon: "📝",
    },
    {
      path: "/side",
      name: "Side Page",
      description: "Additional content page",
      icon: "📄",
    },
    {
      path: "/pokemon",
      name: "Pokemon",
      description: "Pokemon data and information",
      icon: "⚡",
    },
    {
      path: "/dance",
      name: "Tanzen",
      description: "Dance-related content",
      icon: "💃",
    },
    {
      path: "/finanz",
      name: "Finanzen",
      description: "Financial information and tools",
      icon: "💰",
    },
    {
      path: "/herbalism",
      name: "Herbalism",
      description: "Herbal medicine and plants",
      icon: "🌿",
    },
    {
      path: "/monsterhunter",
      name: "Monster Hunter",
      description: "Monster Hunter game content",
      icon: "🏹",
    },
    {
      path: "/hrhub",
      name: "HR Hub",
      description: "Human resources tools and information",
      icon: "👥",
    },
    {
      path: "/spotify",
      name: "Spotify",
      description: "Music and playlist management",
      icon: "🎵",
    },
  ];

  const technologies = [
    {
      name: "React",
      version: "19.2.0",
      description: "UI library for building user interfaces",
      color: "bg-blue-500",
    },
    {
      name: "React Router",
      version: "7.13.1",
      description: "Routing library for React applications",
      color: "bg-red-500",
    },
    {
      name: "Tailwind CSS",
      version: "4.2.1",
      description: "Utility-first CSS framework",
      color: "bg-cyan-500",
    },
    {
      name: "Vite",
      version: "7.3.1",
      description: "Build tool and development server",
      color: "bg-purple-500",
    },
    {
      name: "Axios",
      version: "1.13.5",
      description: "HTTP client for API requests",
      color: "bg-green-500",
    },
    {
      name: "ESLint",
      version: "9.39.1",
      description: "JavaScript linting tool",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Project Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 font-light">
            All In One - A Modern React Application
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
              Project Overview
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong className="text-indigo-600">All In One</strong> is a
              comprehensive React application built with modern web
              technologies. This project serves as a personal portfolio and
              collection of various tools, information hubs, and interactive
              features all in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-lg text-blue-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">✨</span>
                  Key Features:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Multiple themed sections
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Responsive design with Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Client-side routing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Modular component architecture
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h4 className="font-bold text-lg text-purple-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🚀</span>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React 19", "Vite", "Tailwind CSS", "React Router"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/60 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pages */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full mr-4"></span>
            Available Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {page.icon}
                  </span>
                  <h4 className="font-bold text-xl text-gray-800">
                    {page.name}
                  </h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {page.description}
                </p>
                <code className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-sm font-mono border border-gray-300">
                  {page.path}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-4"></span>
            Technologies & Libraries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-xl text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <span
                    className={`px-3 py-1 text-white text-sm font-bold rounded-full ${tech.color} shadow-lg`}
                  >
                    v{tech.version}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
                <div
                  className={`w-full h-1 ${tech.color} rounded-full mt-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Info */}
        <section>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full mr-4"></span>
            Development Information
          </h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-lg text-emerald-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">⚙️</span>
                  Build & Development
                </h4>
                <div className="space-y-3">
                  {[
                    { cmd: "npm run dev", desc: "Start development server" },
                    { cmd: "npm run build", desc: "Build for production" },
                    { cmd: "npm run lint", desc: "Run ESLint" },
                    {
                      cmd: "npm run preview",
                      desc: "Preview production build",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-white/60 rounded-lg"
                    >
                      <code className="text-sm font-mono text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                        {item.cmd}
                      </code>
                      <span className="text-xs text-emerald-600 ml-2">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100">
                <h4 className="font-bold text-lg text-violet-800 mb-4 flex items-center">
                  <span className="text-2xl mr-2">📁</span>
                  Project Structure
                </h4>
                <div className="space-y-3">
                  {[
                    { path: "src/pages/", desc: "Page components" },
                    { path: "src/components/", desc: "Reusable components" },
                    { path: "src/layouts/", desc: "Layout components" },
                    { path: "src/data/", desc: "Static data files" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-white/60 rounded-lg"
                    >
                      <code className="text-sm font-mono text-violet-700 bg-violet-100 px-2 py-1 rounded">
                        {item.path}
                      </code>
                      <span className="text-xs text-violet-600 ml-2">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default DevNotes;
