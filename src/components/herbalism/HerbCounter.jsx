function HerbCounter({ count, herb }) {
  return (
    <div className="p-4 w-30  shadow-2xl border-amber-50 rounded-2xl flex items-center justify-center text-2xl font-bold text-emerald-900">
      <div className="flex items-center gap-4">
        <div>
          {herb} : {count}
        </div>
      </div>
    </div>
  );
}
export default HerbCounter;
