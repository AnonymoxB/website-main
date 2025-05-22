import { MdContentCopy } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ShareLove } from "@/app/(invitation)/sections/SectionShareLove";
import { Notyf } from "notyf";


export default function CardPay({ data }: { data: ShareLove }) {
  const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });
  let namaBankLengkap = '';
  switch (data.namaBank) {
    case "mandiri":
      namaBankLengkap = "Bank Mandiri";
      break;
    case "bca":
      namaBankLengkap = "Bank Central Asia";
      break;
    case "bri":
      namaBankLengkap = "Bank Rakyat Indonesia";
      break;
    case "bni":
      namaBankLengkap = "Bank Negara Indonesia";
      break;
    case "bsi":
      namaBankLengkap = "Bank Syariah Indonesia";
      break;
    default:
      namaBankLengkap = "Bank Central Asia";
      break;
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    notify.success("Copied to clipboard");
  }
  return (
    <div
      className="bg-gray-50 p-[42px] rounded-[45px] lg:rounded-[90px] space-y-[64px] w-[312px] lg:w-[694.74px] font-Plus-Jakarta-Sans"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex justify-center">
        <img
          src={`/theme/example/svg/logo-${data.namaBank}.svg`}
          alt=""
          className="w-[140.37px] h-[42.33px] lg:w-[280.74px] lg:h-[84.65px]"
        />
      </div>
      <div className="space-y-[24px]">
        <h2 className="text-center text-emerald-900 text-xl font-bold lg:text-5xl lg:font-normal font-Plus-Jakarta-Sans">
          {namaBankLengkap}
        </h2>
        <div className="text-center text-emerald-800 text-xl lg:text-4xl font-normal">
          {data.atasNama}
        </div>
        <div className="text-center text-emerald-700 text-xl lg:text-3xl">
          {data.nomorRekening}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-fit space-y-[24px]">
          <button onClick={() => copyToClipboard(data.nomorRekening)} className="text-gray-50 text-base font-bold bg-emerald-700 py-[12px] px-[18px] flex items-center gap-[18px] rounded-[10px] w-full justify-center hover:bg-emerald-600 duration-300">
            <MdContentCopy className="scale-125" />
            <span>Copy</span>
          </button>
          {/* <button className="text-base font-bold border border-emerald-700 text-emerald-700 py-[12px] px-[18px] flex items-center gap-[18px] rounded-[10px] hover:bg-emerald-700 hover:text-gray-50 duration-300">
            <span className="bg-emerald-700 text-white p-1 rounded-full">
              <FaWhatsapp className="" />
            </span>
            <span>Confirm</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
