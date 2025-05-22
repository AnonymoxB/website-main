import { IconUser } from "../../../public/assets/iconSVG";

export default function CardKonfirmasiKehadiran({backgroundColor,title,value}:{backgroundColor:string;title:string;value:number}) {
  return (
    <div className="cols-span-1 py-[21px] px-[15px] bg-gray-100 rounded-md flex gap-[16px]">
      <div className={`${backgroundColor} p-4 rounded-xl max-w-[64px] max-h-[64px]`}>
        <IconUser/>
      </div>
      <div className="flex-1">
        <h5 className="text-gray-800 text-base font-normal">{title}</h5>
        <p className="text-gray-800 text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}
