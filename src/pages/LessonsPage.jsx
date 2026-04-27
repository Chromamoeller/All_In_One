import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import credentials from "../data/login/credentials.json";
export default function LoginPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPpassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [successText, setSuccessText] = useState("");
  const [success, setSuccess] = useState(false);
  const user = credentials.find(
    (u) => u.username === userEmail && u.password === userPpassword,
  );
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();

    if (!user) {
      setError("Ungültige E-Mail oder Passwort");
      return;
    }

    setError("");
    setSuccessText("Erfolgreich eingeloggt!");

    console.log("E-Mail:", userEmail);
    console.log("Passwort:", userPpassword);

    setUserEmail("");
    setUserPassword("");
    setIsLoginOpen(false);
    setSuccess(true);
    navigate(user.redirect);
  }
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div className="flex h-full justify-center items-center bg-gradient-to-br from-blue-100 to-gray-400">
      <button
        type="button"
        className="px-4 py-2 bg-blue-600 text-white text-2xl rounded-lg hover:bg-blue-700 active:scale-95 transition"
        onClick={() => setIsLoginOpen(true)}
      >
        Login
      </button>
      {success && (
        <p className="absolute right-0 top-0 mb-3 text-xl bg-black px-4 py-2 text-green-500 transition-all duration-300">
          {successText}
        </p>
      )}

      {isLoginOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-2xl w-96 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Login</h2>
              {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

              <button
                type="button"
                onClick={() => setIsLoginOpen(false)}
                className="text-gray-500 hover:text-gray-900 text-xl"
              >
                ×
              </button>
            </div>{" "}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Kursbezeichnung"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                  setError("");
                }}
                className="w-full mb-3 p-3 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition"
              />

              <input
                type="password"
                placeholder="Passwort"
                value={userPpassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                  setError("");
                }}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg 
             hover:bg-blue-700 active:scale-95 
             transition font-medium"
              >
                Einloggen
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
