import { useContext } from "react";
import { ViewContext } from "../../providers/View.provider";
import annotation from "../../data/annotations.json";
export default function Descriptor() {
  const { viewId } = useContext(ViewContext);
  const datainfo = annotation.find((e) => {
    return e.title === viewId;
  });

  return (
    <div className="w-1/4 bg-gray-100 h-full fixed z-20 px-5 py-5 overflow-y-scroll scrollbar overflow-x-hidde bg-[url(/images/pattetn1.png)]">
      <div className="relative z-[2]">
        <img src="/images/logo_new.svg" draggable={false} />
        <p className="text-xl">{datainfo.title}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: datainfo.description,
          }}
        ></div>
      </div>
    </div>
  );
}
