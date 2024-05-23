import HighlightsCard from "./HighlightsCard";
export default function Highlights({ data }) {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-xl p-2 mb-4">Todays HighLights</p>
      <div className="grid grid-cols-3 gap-4 w-fit max-sm:grid-cols-2 ">
        {data.map((highlight, index) => (
          <HighlightsCard data={highlight} key={index} />
        ))}
      </div>
    </div>
  );
}
