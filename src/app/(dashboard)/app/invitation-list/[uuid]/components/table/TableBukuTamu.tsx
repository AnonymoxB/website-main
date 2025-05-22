import React, { useState } from "react";
import { Pagination } from "../Pagination";

interface TablePropsType {
  dataTable: any;
}

export default function TableBukuTamu({ dataTable }: TablePropsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataTable.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="border rounded-lg border-gray-300 hidden md:block w-full">
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
                Alamat
              </td>
              <td className="p-[12px] bg-gray-100 whitespace-nowrap border-l border-gray-300">
                Kehadiran
              </td>
              <td className="p-[12px] bg-gray-100 whitespace-nowrap border-l border-gray-300">
                Wish
              </td>
              <td className="p-[12px] bg-gray-100 whitespace-nowrap rounded-tr-[6.7px] border-l border-gray-300">
                Scan
              </td>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((item: any) => (
              <tr key={item?.id} className="border-t border-gray-300">
                <td className="p-[12px] border-l whitespace-nowrap">
                  {item?.name}
                </td>
                <td className="p-[12px] border-l border-gray-300">
                  {item?.phone_number}
                </td>
                <td className="p-[12px] border-l border-gray-300">
                  {item?.address}
                </td>
                <td className="p-[12px] border-l border-gray-300 text-center">
                  <div
                    className={`text-gray-700 text-xs font-semibold bg-emerald-200 px-1.5 py-0.5 rounded w-fit whitespace-nowrap ${
                      item.is_scan === "1"
                        ? "bg-emerald-200"
                        : item.rsvp?.is_present === "0"
                        ? "bg-red-200"
                        : item.rsvp?.is_present === "1"
                        ? "bg-orange-200"
                        : "bg-yellow-200"
                    }`}
                  >
                    {item.is_scan === "1"
                      ? "Hadir"
                      : item.rsvp?.is_present === "0"
                      ? "Tidak Hadir"
                      : item.rsvp?.is_present === "1"
                      ? "Ingin Hadir"
                      : "Belum Konfirmasi"}
                  </div>
                </td>
                <td className="p-[12px] border-l border-gray-300">
                  {item?.status_message}
                </td>
                <td className="p-[12px] whitespace-nowrap space-x-[10px] border-l border-gray-300">
                  {item?.is_scan === "0" ? (
                    <div className="text-gray-700 text-xs font-semibold bg-red-200 px-1.5 py-0.5 rounded w-fit">
                      Belum
                    </div>
                  ) : (
                    <div className="text-gray-700 text-xs font-semibold bg-emerald-200 px-1.5 py-0.5 rounded w-fit">
                      Sudah
                    </div>
                  )}
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
                <td className="p-[12px] bg-gray-100 rounded-tr-[6.7px] text-emerald-500">
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
                <td className="p-[12px] border-r border-gray-300">Alamat</td>
                <td className="p-[12px]">{item.address}</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-[12px] border-r border-gray-300">Kehadiran</td>
                <td className="p-[12px]">
                  <div
                    className={`text-gray-700 text-xs font-semibold bg-emerald-200 px-1.5 py-0.5 rounded w-fit whitespace-nowrap ${
                      item.is_scan === "1"
                        ? "bg-emerald-200"
                        : item.rsvp?.is_present === "0"
                        ? "bg-red-200"
                        : item.rsvp?.is_present === "1"
                        ? "bg-orange-200"
                        : "bg-yellow-200"
                    }`}
                  >
                    {item.is_scan === "1"
                      ? "Hadir"
                      : item.rsvp?.is_present === "0"
                      ? "Tidak Hadir"
                      : item.rsvp?.is_present === "1"
                      ? "Ingin Hadir"
                      : "Belum Konfirmasi"}
                  </div>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-[12px] border-r border-gray-300">Wish</td>
                <td className="p-[12px]">{item?.address}</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-[12px] border-r border-gray-300">Scan</td>
                <td className="p-[12px]">
                  {item?.is_scan === "0" ? (
                    <div className="text-gray-700 text-xs font-semibold bg-red-200 px-1.5 py-0.5 rounded w-fit">
                      Belum
                    </div>
                  ) : (
                    <div className="text-gray-700 text-xs font-semibold bg-emerald-200 px-1.5 py-0.5 rounded w-fit">
                      Sudah
                    </div>
                  )}
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
