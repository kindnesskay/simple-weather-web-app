export default function TopBar({ temp, setTemp }) {
  return (
    <nav className="w-full justify-center">
      <div className="flex p-4 w-full items-center justify-between max-width">
        <div className="flex gap-4 p-2 h-12">
          <button className="text-xl font-semibold text-gray-400 hover:text-black hover:border-b-2 border-black  transition-all pb-1 cursor-pointer">
            Today
          </button>
          <button className="text-xl font-semibold text-gray-400  hover:text-black hover:border-b-2 border-black transition-all pb-1 cursor-pointer">
            Week
          </button>
        </div>
        <div className="flex gap-2 px-8">
          <button
            onClick={() => setTemp("C")}
            className={`${
              temp == "C" ? "bg-black text-white" : "bg-white text-black"
            } w-8 h-8 rounded-full  font-bold text-lg hover:text-white hover:bg-black  transition-colors cursor-pointer`}
          >
            C
          </button>
          <button
            onClick={() => setTemp("F")}
            className={`${
              temp == "F" ? "bg-black text-white" : "bg-white text-black"
            } w-8 h-8 rounded-full font-bold text-lg hover:text-white hover:bg-black transition-colors cursor-pointer`}
          >
            F
          </button>
        </div>
      </div>
    </nav>
  );
}
