import slowWaltz from "../data/dances/standard/slowWaltz";
import tango from "../data/dances/standard/tango";

function FigureCard({ dance, role = "leader" }) {
  // Mapping vom Tanznamen zu deinen Datendateien
  const datasets = {
    "Langsamer Walzer": slowWaltz,
    Tango: tango,
  };

  // korrekt: hole das richtige Datenobjekt
  const dataset = datasets[dance];

  // wenn kein Datensatz existiert → nichts anzeigen
  if (!dataset) return null;

  // Figuren basierend auf Leader/Follower
  const figures = dataset[role] ?? [];

  return (
    <>
      <div className="flex flex-wrap w-full justify-around">
        {figures.map((fig) => (
          <div key={fig.id} className="w-60 bg-blue-300 mt-5 p-2 rounded">
            <p className="text-2xl text-amber-950">{fig.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FigureCard;
