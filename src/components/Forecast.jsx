import DailyCard from "./DailyCard";
export default function Forecast({ data, temp }) {
  return (
    <div className="w">
      <p className="font-bold text-xl pl-4">Three days forecast</p>
      <div className="flex gap-4 overflow-x-auto w-full scroll-smooth p-4">
        {data.map((item, index) => (
          <DailyCard data={item} key={index} temp={temp} />
        ))}
      </div>
    </div>
  );
}
