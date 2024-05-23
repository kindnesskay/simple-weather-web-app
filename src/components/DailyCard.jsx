export default function DailyCard({ data, temp }) {
  const { day, image, temp_c, temp_f, text } = data;

  return (
    <div className="p-2 gap-1 flex flex-col justify-between items-center aspect-square w-48 blur-back font-semibold text-lg  cursor-pointer rounded-xl shadow-xl hover:shadow-sm">
      <p>{text}</p>
      <div className="w-full flex items-center justify-center">
        <img src={image} className="" />
      </div>
      {temp == "C" && (
        <p className="text-2xl font-semibold">
          {temp_c}
          <span className="font-normal text-[20px]">c</span>
        </p>
      )}
      {temp == "F" && (
        <p className="text-2xl font-semibold">
          {temp_f}
          <span className="font-normal text-[20px]">f</span>
        </p>
      )}
    </div>
  );
}
