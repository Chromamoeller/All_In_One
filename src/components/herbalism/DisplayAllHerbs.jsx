import HerbCounter from "./HerbCounter";
function DisplayAllHerbs() {
  return (
    <div className="p-4 w-full h-30 shadow-2xl border-amber-50 rounded-2xl flex gap-4 text-2xl font-bold text-emerald-900">
      <HerbCounter herb="🍁" count={5} />
      <HerbCounter herb="🍂" count={3} />
      <HerbCounter herb="🌿" count={7} />
      <HerbCounter herb="🌱" count={7} />
    </div>
  );
}
export default DisplayAllHerbs;
