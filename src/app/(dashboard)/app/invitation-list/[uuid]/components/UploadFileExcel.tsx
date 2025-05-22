import Button from "@/components/button/Button";
import Modal, { ModalComponentProps } from "@/components/modal/Modal";
import { uploadExcel } from "@/service/api";
import { getToken } from "@/utils/auth";
import Link from "next/link";
import { Notyf } from "notyf";
import { useEffect, useState } from "react";


export default function UploadFileExcel(props:Omit<ModalComponentProps, "children">) {
    const [file,setFile]=useState<File|null>(null)
    const [fileName,setFileName]=useState<string>('')
    const [isLoading,setIsLoading]=useState<boolean>(false)

    const token =getToken()
    const notfy=new Notyf({
        position: {
          x: 'right',
          y: 'top',
      },})

    useEffect(()=>{
        if(file){
            setFileName(file.name)
        }
    },[file])

    const handleUpload=async()=>{
        if(token&&file&&props.invitationId){
            setIsLoading(true)
            const response=await uploadExcel(token,{invitationId:props.invitationId,file:file})
            if(response.status===200){
               setIsLoading(false)
               props.onClose()
               props.getAllDataRsvp?.()
               return notfy.success(response.data.message)
            }
            notfy.error('Upload Gagal, Format Data Document Tidak Sesuai')
            setIsLoading(false)
            props.onClose()
            props.getAllDataRsvp?.()
        }
    }

  return (
    <Modal {...props} contentClassName="pt-[16px] px-5">
        <div className="space-y-[16px]">
            <h4 className="text-black text-xl font-medium">Tambah Daftar Tamu</h4>
            <div className="text-sm">
                <span className="text-black font-normal">Download format data di sini:</span>
                <span className="text-sky-500"> 
                    <Link target="_blank" href="https://voow.xyz/file/show/invitation/user/ImportExcelGuestBook0_1702280619.xlsx">Contoh_file_excel.xlsx</Link>
                </span>
            </div>
            <div className="space-y-[16px] py-[40px]">
                <div className="text-center">{fileName?`dipilih: ${fileName}`:'Upload .xlsx, .xls or .csv file'}</div>
                <div className="flex justify-center gap-3">
                    <Button size="medium">
                        <label htmlFor="drop-file-excel" className="cursor-pointer">
                            {fileName?'Change file':'Select file'} 
                        </label>
                    </Button>
                    <Button isLoading={isLoading} onClick={handleUpload} size="medium" className={`${!fileName?"hidden":'block'}`}>Upload</Button>
                    <input
                        id="drop-file-excel"
                        type="file"
                        className="hidden"
                        accept=".xlsx, .xls, .csv"
                        onChange={(e)=>setFile(e.target.files?e.target.files[0]:null)}
                    />
                </div>
            </div>
        </div>
    </Modal>
  )
}
