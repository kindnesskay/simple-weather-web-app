import getFormattedDate from "../utils/dateInWords";
import getTimeInFormat from "../utils/time";

export default function DateTime() {
  const date_in_words = getFormattedDate();
  const time = getTimeInFormat();
  return (
    <div className=" bg-white p-6 text-gray-500 text-center rounded-xl ">
      <p className="text-4xl font-semibold pb-2">{time}</p>
      <p className="text-xl font-medium">{date_in_words}</p>
    </div>
  );
}
