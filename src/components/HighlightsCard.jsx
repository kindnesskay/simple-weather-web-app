export default function HighlightsCard({ data }) {
  const { text, value, image, measure } = data;
  return (
    <div className="flex flex-col justify-between gap-2 p-4 test aspect-square  blur-back rounded-xl shadow-xl hover:shadow-sm cursor-pointer text-center">
      <p className=" text-slate-500 font-semibold text-xl mb-2">{text}</p>
      <p className=" font-bold text-2xl ">
        {value} <span className=" font-medium text-sm">{measure}</span>
      </p>
      <div className=" flex-1 h-12 w-full flex items-center justify-center">
        <img src={image} alt={text} />
      </div>
    </div>
  );
}
