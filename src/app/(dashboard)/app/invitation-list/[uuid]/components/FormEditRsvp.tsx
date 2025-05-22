import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Modal, { ModalComponentProps } from "@/components/modal/Modal";
import { getAllRsvp, updateRsvp } from "@/service/api";
import { getToken } from "@/utils/auth";
import { Notyf } from "notyf";
import { useEffect, useState } from "react";

export default function FormEditRsvp(props:Omit<ModalComponentProps,'children'>) {
    const [name,setName]=useState<string>('')
    const [address,setAddress]=useState<string>('')
    const [whatsAppNumber,setWhatsAppNumber]=useState<string>('')
    const [isLoading, setIsloading] = useState<boolean>(false);

    const token = getToken();
    const notfy=new Notyf({
        position: {
          x: 'right',
          y: 'top',
      },})

    useEffect(()=>{
        if(props.data){
            setName(props.data.name)
            setAddress(props.data.address)
            setWhatsAppNumber(props.data.phone_number)
        }
    },[props.data])
    async function handleSubmit(){
        if(!name||!address||!whatsAppNumber){
            return notfy.error('Field Masih Kosong')
        }
        if(token){
            setIsloading(true)
            await updateRsvp(token,{
                invitation_id:props.data?.invitation_id,
                userId:props.data?.id,
                name:name,
                address:address,
                phone_number:whatsAppNumber
            })
            notfy.success('Berhasil diubah')
            props.onClose()
        }
        props.getAllDataRsvp?.()
        setIsloading(false)
    }

  return (
    <Modal {...props} contentClassName="px-5 pt-[9px] space-y-[16px] font-Plus-Jakarta-Sans">
        <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium ">Edit Tamu</h4>
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
          <div className="flex justify-center gap-3">
            <Button className="w-full" size="medium" onClick={handleSubmit} isLoading={isLoading}>Ubah</Button>
            <Button className="w-full bg-red-500 font-normal hover:bg-red-600" size="medium" onClick={props.onClose}>Batal</Button>
          </div>
        </form>
        </div>
    </Modal>
  )
}
