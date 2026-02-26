import InfoCard from "../components/InfoCard";

function MainLayout() {
  return (
    <div className="flex flex-wrap justify-center">
      <InfoCard bg="bg-blue-500/20" />
      <InfoCard bg="bg-green-500/20" />
      <InfoCard bg="bg-red-500/20" />

      <InfoCard />
    </div>
  );
}
export default MainLayout;
