import { useState } from "react";
import { IconSend } from "../../../../../../../../public/assets/iconSVG";
import { Pagination } from "../Pagination";
import { getToken } from "@/utils/auth";
import { sendMessage } from "@/service/api";
import { Notyf } from "notyf";

interface TablePropsType {
  dataTable: any;
  invitationId?: number;
  getAllDataMessage?: () => void;
}

export default function TableKirimUndangan({
  dataTable,
  invitationId,
  getAllDataMessage,
}: TablePropsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataTable.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const token = getToken();

  const notfy = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  async function handleSendMessage(guestId: number) {
    if (token && invitationId) {
      const response = await sendMessage(token, {
        invitationId: invitationId,
        guestId: guestId,
      });
      console.log(response)
      if (response.data.code === 200) {
        getAllDataMessage?.();
        return notfy.success(
          `Undangan Berhasi dikirim ke ${response.data.data.value}`
        );
      }
      notfy.error("Gagal Mengirim Undangan");
    }
  }

  return (
    <>
      <div className="border rounded-lg border-gray-300 hidden md:block">
        <table className="w-full">
          {currentData?.length == 0 && (
            <caption className="caption-bottom py-4">Data Not Found</caption>
          )}
          <thead>
            <tr className="leading-normal text-gray-800 text-base font-normal ">
              <td className="p-[12px] bg-gray-100 whitespace-nowrap rounded-tl-[6.7px] border-gray-300">
                Nama
              </td>
              <td className="p-[12px] bg-gray-100 whitespace-nowrap border-l border-gray-300">
                Nomor WhatsApp
              </td>
              <td className="p-[12px] bg-gray-100 whitespace-nowrap border-l border-gray-300">
                Status
              </td>
              <td className="p-[12px] bg-gray-100 whitespace-nowrap rounded-tr-[6.7px] border-l border-gray-300">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((item: any) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="p-[12px] whitespace-nowrap">{item.name}</td>
                <td className="p-[12px] border-l border-gray-300">
                  {item.phone_number}
                </td>
                <td className="p-[12px] border-l border-gray-300">
                  <div
                    className={`${
                      item.status_message === "1"
                        ? "bg-emerald-100 text-emerald-500"
                        : "bg-gray-100 text-gray-700"
                    } text-xs font-semibold w-fit rounded px-1.5 py-0.5 leading-none`}
                  >
                    {item.status_message === "1" ? "Terkirim" : "No Action"}
                  </div>
                </td>
                <td className="p-[12px] whitespace-nowrap space-x-[10px] border-l border-gray-300">
                  <button onClick={() => handleSendMessage(item.id)}>
                    <IconSend />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {currentData?.length == 0 && (
        <div className="text-center px-2 md:hidden">Data Not Found</div>
      )}
      {currentData?.map((item: any) => (
        <div
          className="border rounded-lg border-gray-300 md:hidden"
          key={item.id}
        >
          <table className="w-full">
            <thead className="leading-normal text-gray-800 text-base font-normal ">
              <tr className="">
                <td className="p-[12px] bg-gray-100 rounded-tl-[6.7px] border-r border-gray-300">
                  Nama
                </td>
                <td className="p-[12px] bg-gray-100 rounded-tr-[6.7px]">
                  {item.name}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-[12px] border-r border-gray-300 whitespace-nowrap">
                  Nomor WhatsApp
                </td>
                <td className="p-[12px]">{item.phone_number}</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-[12px] border-r border-gray-300">Status</td>
                <td className="p-[12px]">
                  <div
                    className={`${
                      item.status_message === "1"
                        ? "bg-emerald-100 text-emerald-500"
                        : "bg-gray-100 text-gray-700"
                    } text-xs font-semibold w-fit rounded px-1.5 py-0.5 leading-none`}
                  >
                    {item.status_message === "1" ? "Terkirim" : "No Action"}
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-[12px] border-r border-gray-300">action</td>
                <td className="p-[12px]">
                  <button onClick={() => handleSendMessage(item.id)}>
                    <IconSend />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <Pagination
        dataPerPage={dataPerPage}
        totalData={dataTable.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

{
}
