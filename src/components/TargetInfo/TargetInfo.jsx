import { IoLocationSharp } from "react-icons/io5";

export default function TargetInfo() {
  return (
    <div className="fixed right-5 top-5 ">
      <div className="bg-white flex gap-5 p-5 items-center rounded-xl">
        <a
          className="hover:bg-gray-200 cursor-pointer p-1 transition rounded-md"
          href="https://yandex.ru/maps/org/muzey_mirovogo_okeana_glavny_korpus/1159975670/?ll=20.500979%2C54.706376&source=entity_search&tilt=0.8726646259971648&z=18"
        >
          <IoLocationSharp size={30} color="red" />
        </a>
        <div className="border-r pr-5">
          <p className="font-bold">54° 42' 24" N</p>
          <p className="font-bold"> 20° 30' 2" E</p>
        </div>
        <p className="leading-5">
          г. Калининград, <br /> наб. Петра Великого, 1
        </p>
      </div>
    </div>
  );
}
