import SearchField from "./SearchField";

export default function Pannel({ data, handleSearch, temp }) {
  const { city, image, weather, temp_c, temp_f, country, region, localtime } =
    data;
  const time = localtime ? localtime.split(" ")[1] : "";

  return (
    <div className="pannel blur-back justify-center h-fit mt-16">
      <SearchField getValue={handleSearch} />

      <p className="text-5xl font-semibold">{city}</p>
      <p className="text-3xl font-semibold text-gray-500">{weather}</p>

      <div className="flex gap-1 items-center justify-center mt-2">
        <div>
          <img src={image} alt={weather} />
        </div>
        {temp == "C" && (
          <p className="text-4xl font-semibold">
            {temp_c}
            <span className="font-normal text-[20px]">c</span>
          </p>
        )}
        {temp == "F" && (
          <p className="text-4xl font-semibold">
            {temp_f}
            <span className="font-normal text-[20px]">f</span>
          </p>
        )}
      </div>
      {/* <DateTime /> */}
      <div className="font-semibold text-xl text-gray-500 blur-back p-4 min-w-52 hover:shadow-xl ">
        <p>Country : {country}</p>
        <p> Region : {region}</p>
        <p>Time : {time}</p>
      </div>
    </div>
  );
}
