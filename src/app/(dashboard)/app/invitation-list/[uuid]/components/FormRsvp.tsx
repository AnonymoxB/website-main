import ModalLgSize, {
  ModalComponentProps,
} from "@/components/modal/ModalLgSize";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useCallback, useEffect, useState } from "react";
import {
  IconExport,
  IconImport,
} from "../../../../../../../public/assets/iconSVG";
import useToogle from "@/hooks/useToggle";
import UploadFileExcel from "./UploadFileExcel";
import TableRsvp from "./table/TableRsvp";
import { exportExcel, getAllRsvp, getMyInvitationDetail, storeRsvp } from "@/service/api";
import { getToken } from "@/utils/auth";
import { Notyf } from "notyf";
import InputSearch from "@/components/input/InputSearch";
import FileSaver from 'file-saver';


function FormRsvp(
  props: Omit<ModalComponentProps, "children"> & { params: string }
) {
  const [invitationId,setInvitationId]=useState<string>('')
  const [allRsvp,setAllRsvp]=useState<[]>([])
  const [name,setName]=useState<string>('')
  const [whatsAppNumber,setWhatsAppNumber]=useState<string>('')
  const [address,setAddress]=useState<string>('')
  const [isLoading, setIsloading] = useState(false);
  const [isLoadingExport, setIsloadingExport] = useState(false);
  const [searchValue, setSeacrhValue] = useState<string | null>("");
  const [filteredRsvp, setFilteredRsvp] = useState<any>([]);
  const [invitationTitle,setinvitationTitle]=useState<string>('')

  const modalUploadFile = useToogle();
  const token = getToken();
  const { params } = props;
  const notfy=new Notyf({
    position: {
      x: 'right',
      y: 'top',
  },})

  const getInvitationDetails = useCallback(async () => {
    if (token) {
      const responseInv = await getMyInvitationDetail(token, params);
      setInvitationId(responseInv.data.data.detail.invitation_id);
      setinvitationTitle(responseInv.data.data.title)
    }
  }, [token, params]);
  
  const getAllDataRsvp = useCallback(async () => {
    if (invitationId && token) {
      const responseRsvp = await getAllRsvp(token, invitationId);
      setAllRsvp(responseRsvp.data.data.items);
    }
  }, [token, invitationId]);

  useEffect(()=>{
    if (token) {
      getInvitationDetails()
      getAllDataRsvp()
    };
  },[token,params,invitationId,getAllDataRsvp,getInvitationDetails])
    
  async function handleSubmit(){
    if(!name || !address||!whatsAppNumber){
      return notfy.error('Field Masih Kosong')
    }
    if(token&&invitationId){
      setIsloading(true)
      const responseStore=await storeRsvp(token,invitationId,{
        name:name,
        address:address,
        phone_number:whatsAppNumber
      })
      console.log(responseStore)
      if(responseStore.data.code===200){
        notfy.success('Tamu Ditambahkan')
        getAllDataRsvp()
        setIsloading(false)
        setName('')
        setAddress('')
        setWhatsAppNumber('')
      }
    }
  }

  function handleChangeSeacrh(e: any) {
    setSeacrhValue(e.target.value);
    const filterRsvp = allRsvp.filter((items: any) =>
      items.name.toLowerCase().includes(searchValue)
    );
    setFilteredRsvp(filterRsvp);
  }
 
  const handleExport=async()=>{
    if(token&&invitationId&&invitationTitle){
      setIsloadingExport(true)
      const response:any=await exportExcel(token,invitationId)
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, `${invitationTitle}_${invitationId}.xlsx`);
      notfy.success('File Berhasil Diunduh')
    }
    setIsloadingExport(false)
  }

  return (
    <ModalLgSize
      {...props}
      contentClassName="px-5 pt-[9px] space-y-[16px] font-Plus-Jakarta-Sans"
    >
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium ">Tambah Daftar Tamu</h4>
        <form className="space-y-[16px]">
          <div className="flex flex-col  gap-2 self-stretch w-full">
            <div className="self-stretch text-gray-600  text-sm leading-5">
              Nama
            </div>
            <Input
              value={name}
              setValue={setName}
              placeholder="Masukkan Nama Anda"
              name="nama"
              inputClassName="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col  gap-2 self-stretch w-full">
            <div className="self-stretch text-gray-600  text-sm leading-5">
              Nomor Whatsapp
            </div>
            <Input
              type="number"
              value={whatsAppNumber}
              setValue={setWhatsAppNumber}
              placeholder="Masukkan Nomor Telepon Anda"
              name="whatsappNumber"
              inputClassName="border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col  gap-2 self-stretch w-full">
            <div className="self-stretch text-gray-600  text-sm leading-5">
              Alamat
            </div>
            <Input
              value={address}
              setValue={setAddress}
              placeholder="Masukkan Alamat Anda"
              name="nama"
              inputClassName="border border-gray-300 p-2"
            />
          </div>
          <Button onClick={handleSubmit} isLoading={isLoading} className="w-full">Tambah tamu</Button>
        </form>
      </div>
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium ">Daftar Tamu</h4>
        <div className="flex flex-col lg:flex-row gap-[16px] w-full">
          <div className="w-full">
            <InputSearch placholder="Cari Tamu..." onChange={handleChangeSeacrh} />
          </div>
          <div className="flex gap-[16px]">
            <Button
              size="medium"
              className="font-normal w-full"
              iconLeft={<IconImport />}
              onClick={modalUploadFile.toggleChange}
            >
              Import
            </Button>
            <Button
              size="medium"
              className="bg-red-500 font-normal hover:bg-red-600 w-full lg:w-fit"
              iconLeft={<IconExport />}
              onClick={handleExport}
              isLoading={isLoadingExport}
            >
              {/* <Link href={`https://voow.xyz/api/v1/invitation/${invitationId}/rsvp/export-excel`}> */}
                <span className="hidden lg:block">Export</span>
                <span className="lg:hidden">Export ke Exel</span>
              {/* </Link> */}
            </Button>
          </div>
          <UploadFileExcel
            visible={modalUploadFile.value}
            modalTitle="Upload File"
            onClose={modalUploadFile.toggleChange}
            invitationId={invitationId}
            getAllDataRsvp={getAllDataRsvp}
          />
        </div>
      </div>
      <TableRsvp 
        dataTable={!searchValue? allRsvp:filteredRsvp}
        getAllDataRsvp={getAllDataRsvp}
      /> 
    </ModalLgSize>
  );
}

export default FormRsvp;
