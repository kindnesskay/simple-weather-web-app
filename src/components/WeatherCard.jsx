export default function WeatherCard({ data }) {
  const { image, value, day, time, measure, name } = data;
  return (
    <div className="bg-white p-4 flex flex-col items-center">
      <div className="red-border h-48">
        <img src={image} alt={name} />
      </div>
      <div>
        <p>{value}</p>
        <p>
          {day}
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
}
