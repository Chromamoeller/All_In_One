function Figuren() {
  return (
    <div className="h-full flex flex-col bg-red-300 shadow-md">
      <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center shadow-xl rounded-b-xl">
        <div className="flex-1 flex w-full h-full justify-around items-center">
          <button className="">Chachacha</button>
          <button className="">Rumba</button>
          <button className="">Jive</button>
          <button className="">Samba</button>
          <button className="">Salsa</button>
        </div>
        <div className="flex-1 flex w-full h-full justify-around items-center">
          <button>Langsamer Walzer</button>
          <button>Wiener Walzer</button>
          <button>Tango</button>
          <button>Foxtrott</button>
          <button>Discofox</button>
        </div>
      </div>
      <div className="flex-3">
        <p>Hier werden die Figuren der Geschichte vorgestellt.</p>
      </div>
    </div>
  );
}

export default Figuren;
