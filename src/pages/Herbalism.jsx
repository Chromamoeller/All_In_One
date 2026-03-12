import HerbCard from "../components/herbalism/herbCard";
import placeHolderImg from "../assets/placeholder.png";
import DisplayAllHerbs from "../components/herbalism/DisplayAllHerbs";

function Herbalism() {
  return (
    <div
      className="relative w-full min-h-screen p-8 flex flex-wrap justify-center gap-10 
                    bg-gradient-to-br from-green-200 via-emerald-100 to-lime-200
                    overflow-hidden"
    >
      <DisplayAllHerbs />
      <h1 className="w-full text-center text-4xl font-bold text-emerald-900 drop-shadow-sm mb-6 tracking-wide">
        🌿 Herbal Wonderland
      </h1>

      <HerbCard
        name="Eucalyptus"
        description="Ein duftender Baum, der für seine heilenden Eigenschaften bekannt ist."
        imageUrl={placeHolderImg}
      />

      <HerbCard
        name="Lavendel"
        description="Ein beruhigendes Kraut, das oft in der Aromatherapie verwendet wird."
        imageUrl={placeHolderImg}
      />

      <HerbCard
        name="Kamille"
        description="Ein sanftes Kraut, das für seine entspannenden Eigenschaften geschätzt wird."
        imageUrl={placeHolderImg}
      />
    </div>
  );
}

export default Herbalism;
