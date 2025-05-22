import { useState } from "react";
import {
  IconPen,
  IconTrash,
} from "../../../../../../../../public/assets/iconSVG";
import { Pagination } from "../Pagination";
import useToogle from '@/hooks/useToggle'
import FormEditRsvp from "../FormEditRsvp";
import ModalDeleteRsvp from "../ModalDeleteRsvp";
interface TablePropsType {
  dataTable: any;
  getAllDataRsvp:()=>void;
}

export default function TableRsvp({ dataTable,getAllDataRsvp }: TablePropsType) {
  const [currentPage, setCurrentPage] = useState(1);
  const [singleDataTamu,setSingleDataTamu]=useState<any>(null)
  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataTable.slice(indexOfFirstData, indexOfLastData);
  const modalFormEditRsvp=useToogle();
  const modalDeleteRsvp=useToogle();

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  
  return (
    <>
      <div className="border rounded-lg border-gray-300 hidden md:block">
        <table className="w-full">
          {currentData?.length==0 &&
          <caption className="caption-bottom py-4">
            Data Not Found
          </caption>
          }
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
                  {item.address}
                </td>
                <td className="p-[12px] whitespace-nowrap space-x-[10px] border-l border-gray-300">
                  <button 
                    onClick={()=>{
                      modalFormEditRsvp.toggleChange()
                      setSingleDataTamu(item)
                      }
                    }>
                      <IconPen />
                  </button>
                  <button 
                    onClick={()=>{
                      modalDeleteRsvp.toggleChange()
                      setSingleDataTamu(item)
                    }}>
                      <IconTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormEditRsvp onClose={modalFormEditRsvp.toggleChange} visible={modalFormEditRsvp.value} modalTitle="Edit" data={singleDataTamu} getAllDataRsvp={getAllDataRsvp}/>
      <ModalDeleteRsvp onClose={modalDeleteRsvp.toggleChange} visible={modalDeleteRsvp.value} modalTitle="Delete Rsvp" data={singleDataTamu} getAllDataRsvp={getAllDataRsvp}/>
      <div>
        {currentData?.length==0 &&
          <div className="text-center px-2 md:hidden">
            Data Not Found
          </div>
        }
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
                  <td className="p-[12px] border-r border-gray-300">Alamat</td>
                  <td className="p-[12px]">{item.address}</td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="p-[12px] border-r border-gray-300">action</td>
                  <td className="p-[12px]">
                    <button 
                      onClick={()=>{
                        modalFormEditRsvp.toggleChange()
                        setSingleDataTamu(item)
                        }
                      }>
                        <IconPen />
                    </button>
                    <button 
                      onClick={()=>{
                        modalDeleteRsvp.toggleChange()
                        setSingleDataTamu(item)
                      }}>
                        <IconTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <Pagination
        dataPerPage={dataPerPage}
        totalData={dataTable.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

