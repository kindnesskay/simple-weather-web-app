import DailyCard from "./DailyCard";
export default function Forecast({ data, temp }) {
  return (
    <div className=" ">
      <p className="font-bold text-xl p-2 mb-4">Three days forecast</p>
      <div className="flex gap-4 justify-center">
        {data.map((item, index) => (
          <DailyCard data={item} key={index} temp={temp} />
        ))}
      </div>
    </div>
  );
}
