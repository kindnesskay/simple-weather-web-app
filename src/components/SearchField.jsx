import { useState } from "react";

export default function SearchField({ getValue }) {
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!city) return;
    getValue(city);
    setCity("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg h-12 p-2 flex text-2xl overflow-hidden bg-white rounded-2xl"
    >
      <input
        className="pl-2 h-full w-full flex-1 rounded-l-xl"
        type="search"
        value={city}
        placeholder="City.."
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="submit"
        value="search"
        className="px-2 text-[18px] h-full bg-white rounded-r-xl  text-gray-500 cursor-pointer hover:shadow-md"
      />
    </form>
  );
}
