import Button from "@/components/button/Button";
import Modal, { ModalComponentProps } from "@/components/modal/Modal";
import { deleteRsvp } from "@/service/api";
import { getToken } from "@/utils/auth";
import { Notyf } from "notyf";
import { useState } from "react";

export default function ModalDeleteRsvp(props:Omit<ModalComponentProps,'children'>) {
    const [isLoading,setIsLoading]=useState<boolean>(false)
    
    const token = getToken();
    const notfy=new Notyf({
        position: {
          x: 'right',
          y: 'top',
      },})

    async function handleSubmit() {
        if(token){
            setIsLoading(true)
            const response=await deleteRsvp(token,props.data?.invitation_id,props.data?.id)
            notfy.success('Tamu Berhasil Dihapus')
            props.onClose()
        }
        props.getAllDataRsvp?.()
        setIsLoading(false)
    }
  return (
    <Modal {...props} contentClassName="px-5 pt-[20px] space-y-[16px] font-Plus-Jakarta-Sans">
        <div className="space-y-[20px]">
            <h4 className="text-black text-lg font-medium text-center">
                <span>Hapus </span> 
                <span className="text-blue-400">{props.data?.name}</span>
                <span> Dari Tamu Undangan</span>
            </h4>
            <div className="flex gap-3">
                <Button className="w-full bg-red-500 font-normal hover:bg-red-700" size="medium" onClick={handleSubmit} isLoading={isLoading}>Hapus</Button>
                <Button className="w-full" size="medium" onClick={props.onClose}>Batal</Button>
            </div>
        </div>

    </Modal>

  )
}
