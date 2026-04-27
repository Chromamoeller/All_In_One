import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { herbs } from "../data/herbalism/herbs.js";
import { potions } from "../data/herbalism/potions.js";
import accounts from "../data/finance/accounts.js";

function Mainpage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Calculate some stats
  const totalHerbs = herbs.length;
  const totalPotions = potions.length;
  const totalPokemon = 151; // Original 151 Pokemon
  const totalAccounts = accounts.length;
  const totalAccountBalance = accounts.reduce(
    (sum, acc) => sum + acc.balance,
    0,
  );

  const modules = [
    {
      id: "herbalism",
      name: "Kräuterkunde",
      description: "Sammle Kräuter und braue Tränke",
      icon: "🌿",
      path: "/herbalism",
      stats: `${totalHerbs} Kräuter, ${totalPotions} Tränke`,
      color: "from-green-500 to-green-600",
    },
    {
      id: "pokemon",
      name: "Pokémon",
      description: "Entdecke die Welt der Pokémon",
      icon: "⚡",
      path: "/pokemon",
      stats: `${totalPokemon} Pokémon verfügbar`,
      color: "from-yellow-500 to-red-500",
    },
    {
      id: "finance",
      name: "Finanzen",
      description: "Verwalte deine Finanzen",
      icon: "💰",
      path: "/finanz",
      stats: `${totalAccounts} Konten, ${totalAccountBalance.toLocaleString("de-DE")} €`,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "dance",
      name: "Tanz",
      description: "Tanzfiguren und Choreografien",
      icon: "💃",
      path: "/dance",
      stats: "Standard & Latein",
      color: "from-pink-500 to-purple-500",
    },
    {
      id: "hr",
      name: "HR Hub",
      description: "Personalmanagement",
      icon: "👥",
      path: "/hrhub",
      stats: "Mitarbeiter & Verwaltung",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "monsterhunter",
      name: "Monster Hunter",
      description: "Jage Monster und sammle Beute",
      icon: "🏹",
      path: "/monsterhunter",
      stats: "Quests & Ausrüstung",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "spotify",
      name: "Spotify",
      description: "Musik und Playlists",
      icon: "🎵",
      path: "/spotify",
      stats: "Deine Musik",
      color: "from-green-400 to-green-500",
    },
    {
      id: "devnotes",
      name: "Dev Notes",
      description: "Entwicklungsnotizen",
      icon: "📝",
      path: "/devnotes",
      stats: "Code & Dokumentation",
      color: "from-gray-500 to-gray-600",
    },
  ];

  const quickStats = [
    {
      label: "Gesamtmodule",
      value: modules.length,
      icon: "📊",
      color: "text-blue-600",
    },
    {
      label: "Verfügbare Kräuter",
      value: totalHerbs,
      icon: "🌿",
      color: "text-green-600",
    },
    {
      label: "Pokémon Arten",
      value: totalPokemon,
      icon: "⚡",
      color: "text-yellow-600",
    },
    {
      label: "Finanzkonten",
      value: totalAccounts,
      icon: "💰",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Willkommen zurück! 🎉
              </h1>
              <p className="text-lg text-gray-600">
                Dein persönliches Dashboard -{" "}
                {currentTime.toLocaleDateString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-gray-500">
                {currentTime.toLocaleTimeString("de-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div className="text-sm text-gray-400">Letzte Aktualisierung</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`text-4xl ${stat.color}`}>{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📈 Aktuelle Aktivitäten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🌿</span>
                <span className="font-semibold text-green-800">
                  Kräuterkunde
                </span>
              </div>
              <p className="text-sm text-green-600">
                {totalHerbs} verschiedene Kräuter verfügbar für das Sammeln und
                Brauen.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">💰</span>
                <span className="font-semibold text-blue-800">Finanzen</span>
              </div>
              <p className="text-sm text-blue-600">
                {totalAccounts} Konten mit einem Gesamtsaldo von{" "}
                {totalAccountBalance.toLocaleString("de-DE")} € verwalten.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">⚡</span>
                <span className="font-semibold text-purple-800">Pokémon</span>
              </div>
              <p className="text-sm text-purple-600">
                Entdecke alle {totalPokemon} Pokémon der ersten Generation.
              </p>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚀 Verfügbare Module
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Link key={module.id} to={module.path} className="group">
                <div
                  className={`bg-gradient-to-r ${module.color} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{module.icon}</span>
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                  <p className="text-white/90 mb-3 text-sm leading-relaxed">
                    {module.description}
                  </p>
                  <div className="text-xs text-white/75 bg-white/10 rounded-full px-3 py-1 inline-block">
                    {module.stats}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🎯 Projekt Übersicht
            </h3>
            <p className="text-gray-600 mb-4">
              Eine Sammlung verschiedener Anwendungen und Tools in einem unified
              Dashboard. Von Finanzmanagement über Pokémon-Datenbank bis hin zu
              Kräuterkunde - alles an einem Ort.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>🌟 React & Tailwind CSS</span>
              <span>📱 Responsive Design</span>
              <span>⚡ Modern Tech Stack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
