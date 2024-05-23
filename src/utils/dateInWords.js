export default function getFormattedDate() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const dayOfWeek = weekdays[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
}
