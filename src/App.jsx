import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import Pannel from "./components/Pannel";

export default function App() {
  const [threeDaysForcast, setThreeDaysForcast] = useState([]);
  const [highLights, setHighLights] = useState([]);
  const [pannelData, setpannelData] = useState({});
  const [temp, setTemp] = useState("C");
  async function fetchData(value) {
    if (!value) value = "london";
    console.log(value);
    await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=370f40a94c1d40308d415350242305&q=${value}&days=3&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        const { location, current, forecast } = data;

        const forcastArray = forecast.forecastday.map((day) => {
          return {
            date: day.date,
            image: day.day.condition.icon,
            text: day.day.condition.text,
            temp_c: day.day.avgtemp_c,
            temp_f: day.day.avgtemp_f,
          };
        });

        const for_pannel = {
          city: location.name,
          weather: current.condition.text,
          image: current.condition.icon,
          temp_c: current.temp_c,
          temp_f: current.temp_f,
          localtime: location.localtime,
          country: location.country,
          region: location.region,
        };
        const for_highlights = [
          {
            text: "Humidity",
            value: current.humidity,
            image: "https://asset.cloudinary.com/dldvoo6qb/155ed29f58fa41928737fa788bfc003f",
            measure: "",
          },
          {
            text: "Visibility",
            value: current.vis_km,
            image: "https://asset.cloudinary.com/dldvoo6qb/3cb8f596e854259761c0cf7633b1b628",
            measure: "km",
          },

          {
            text: "Wind Direction",
            value: current.wind_dir,
            image: "https://asset.cloudinary.com/dldvoo6qb/fc02f8b3b0fe767664cac55e572c38c1",
            measure: "",
          },
          {
            text: "Wind Status",
            value: current.wind_kph,
            image: "https://asset.cloudinary.com/dldvoo6qb/719020e16183b485daa8440ece8e9205",
            measure: "kph",
          },
          {
            text: "Gust Status",
            value: current.gust_kph,
            image: "https://asset.cloudinary.com/dldvoo6qb/95ce8dfa309bb2ec5746eef70fd805f1",
            measure: "kph",
          },
          {
            text: "Uv status",
            value: current.uv,
            image: "https://asset.cloudinary.com/dldvoo6qb/603e5f60d07ab2779bafb87959aebced",
            measure: "",
          },
        ];

        setpannelData(for_pannel);
        setHighLights(for_highlights);
        setThreeDaysForcast(forcastArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col items-center ">
      <div className="main-container items-center  max-width">
        <TopBar temp={temp} setTemp={setTemp} />
        <div className="max-lg:flex-col gap-8 h-full w-fit flex">
          <div className="flex-1 flex justify-center  mr-auto ml-auto  w-full px-2">
            <Pannel data={pannelData} handleSearch={fetchData} temp={temp} />
          </div>
          <div className="w-fit flex flex-col gap-8 h-fit mr-auto ml-auto ">
            <Forecast data={threeDaysForcast} temp={temp} />
            <Highlights data={highLights} />
          </div>
        </div>
      </div>
    </section>
  );
}
