import { ViewContext } from "../../providers/View.provider";
import { useContext } from "react";
import annotation from "../../data/annotations.json";

export default function Navigation() {
  const { setViewId, viewId } = useContext(ViewContext);
  return (
    <div className="fixed bottom-0 w-3/4 right-0 px-10">
      <div className="bg-white rounded-t-2xl flex overflow-hidden w-auto ">
        {annotation.map((a) => (
          <div
            key={a.title}
            className={`p-5 transition-all cursor-pointer hover:bg-blue-400 w-fit flex flex-col items-center text-center gap-1 relative ${
              viewId === a.title && "bg-blue-400"
            }`}
            onClick={() => {
              setViewId(a.title);
            }}
          >
            <img src={a.icon} className="w-10 h-10" />
            <p className="text-xs text-white font-bold absolute top-1">{a.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
