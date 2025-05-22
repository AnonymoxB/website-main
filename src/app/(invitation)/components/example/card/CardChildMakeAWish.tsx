import { IoMdCalendar } from "react-icons/io";
import { LuClock } from "react-icons/lu";

export default function CardChildMakeAWish({
  name,
  svgSource,
  description,
  date,
}: {
  name: string;
  svgSource: string;
  description: string;
  date: string;
}) {
  return (
    <div className="py-[24px] px-[30px] lg:px-[48px] bg-white rounded-[20px] space-y-[24px]">
      <h3 className="text-sky-500 text-3xl font-bold flex items-center gap-[20px]">
        <span>{name}</span>
        <img src={svgSource} alt="" />
      </h3>
      <p className="text-gray-800 text-xl font-normal">{description}</p>
      <div className="border-b w-full border-gray-500" />
      <div className="flex flex-col lg:flex-row justify-between gap-[24px]">
        <div className="text-gray-600 text-xs font-normal leading-none flex items-center gap-[20px]">
          <IoMdCalendar />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
