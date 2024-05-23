export default function getTimeInFormat() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeString = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;
  return timeString;
}
