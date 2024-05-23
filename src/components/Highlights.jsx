import HighlightsCard from "./HighlightsCard";
export default function Highlights({ data }) {
  return (
    <div className="">
      <p className="font-bold text-xl p-2 mb-4">Todays HighLights</p>
      <div className="grid grid-cols-3 gap-4 w-fit ">
        {data.map((highlight, index) => (
          <HighlightsCard data={highlight} key={index} />
        ))}
      </div>
    </div>
  );
}
