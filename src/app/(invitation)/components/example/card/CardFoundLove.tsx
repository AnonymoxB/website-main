import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function CardFoundLove({
  name,
  bgImage,
  fullName,
  description,
  whatsappNumber,
  instagramUser,
}: {
  name: string;
  bgImage: string;
  fullName: string;
  description: string;
  whatsappNumber?: string;
  instagramUser?: string;
}) {
  return (
    <div className="w-fit flex flex-col justify-center items-center space-y-[24px]">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`w-[148px] h-[148px] lg:w-[448px] lg:h-[505px] bg-cover bg-center rounded-full lg:rounded-[170px] border-2 border-emerald-900 flex flex-col justify-end `}
      >
        <div className="text-gray-50 text-[40px] lg:text-9xl font-normal font-beauty-salon-script text-center">
          {name}
        </div>
      </div>
      <div className="space-y-[24px]">
        <div className="text-center space-y-[20px]">
          <h2 className="text-emerald-900 text-base font-medium lg:text-4xl lg:font-normal font-Plus-Jakarta-Sans">
            {fullName}
          </h2>
          <span className="w-[283px] text-center text-emerald-900 text-[10px] lg:text-xl font-normal font-Plus-Jakarta-Sans">
            <div>{description}</div>
          </span>
        </div>
        <div className="flex gap-[24px] justify-center">
          <a
            target="_blank"
            href={`https://wa.me/${whatsappNumber}`}
            className="bg-[#064E3B] w-fit px-2.5 py-2.5 rounded-full hover:scale-110 duration-300"
          >
            <FaWhatsapp className="scale-150 text-white" />
          </a>
          <a
            target="_blank"
            href={`https://www.instagram.com/${instagramUser}`}
            className="bg-[#064E3B] w-fit px-2.5 py-2.5 rounded-full hover:scale-110 duration-300"
          >
            <FaInstagram className="scale-150 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
