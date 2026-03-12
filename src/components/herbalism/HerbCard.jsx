function HerbCard({ name, description, imageUrl }) {
  return (
    <div
      className="relative w-72 h-80 bg-gradient-to-b from-green-100 to-emerald-200 
                    rounded-2xl shadow-lg p-4 flex flex-col justify-between 
                    border-2 border-emerald-300 hover:scale-[1.03] transition-all overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {imageUrl && (
          <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md mb-3">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h2 className="text-xl font-bold text-emerald-900">{name}</h2>
        <p className="text-sm text-emerald-700 text-center px-2">
          {description}
        </p>
      </div>

      <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-emerald-600 shadow">
        Sammeln
      </button>
    </div>
  );
}

export default HerbCard;
