import { getFormatDateWithDay } from "@/app/utils/getFormatDate";
import { FaRegCalendarPlus } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { LuClock } from "react-icons/lu";

interface GroupCardCountdownProps {
  title: string;
  date: string;
  time: string;
  location: {
    place: string;
    street: string;
    link: string;
  };
}
export default function GroupCardCountdown({ title, date, time, location }: GroupCardCountdownProps) {
  return (
    <div className="space-y-[50px] font-Plus-Jakarta-Sans">
      <h3 className="text-center text-emerald-900 text-2xl lg:text-4xl font-bold ">
        {title}
      </h3>
      <div className="h-1 border-b border-b-emerald-700"></div>
      <div className="text-left space-y-[24px] px-[24px]">
        <div className="flex items-center gap-[15px] text-emerald-700 text-xl font-bold">
          <IoMdCalendar className="scale-125" />

          <span>{getFormatDateWithDay(date, "DD MMMM yyyy")}</span>
        </div>
        <div className="text-emerald-700 text-xl font-bold flex items-center gap-[15px]">
          <LuClock className="scale-110" />
          {time}
        </div>
        <div className="text-emerald-700 flex items-center gap-[19px]">
          <IoLocationSharp className="scale-[1.3]" />
          <div className="flex flex-col">
            <span className="text-xl font-bold">{location.place}</span>
            <span className="text-xl">{location.street}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-fit space-y-[24px]">
          <button onClick={() => window.open(location.link)} className="px-[18px] py-[12px] bg-emerald-700 text-gray-50 text-base font-bold flex items-center gap-[18px] rounded-lg w-full justify-center hover:bg-emerald-600 duration-300">
            <IoLocationOutline className="scale-150" />
            <span>Open Map</span>
          </button>
          <button className="px-[18px] py-[12px] border border-emerald-700 text-emerald-700 text-base font-bold flex items-center gap-[18px] rounded-lg w-full hover:bg-emerald-700 hover:text-gray-50 duration-300">
            <FaRegCalendarPlus className="scale-125" />
            <span>Add to Calender</span>
          </button>
        </div>
      </div>
    </div>
  );
}
