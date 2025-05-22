import { useState } from "react"
import { twMerge } from "tailwind-merge";

function SelectBank({ value, onChange, index }: { value: string, onChange: any, index: number }) {
    const [valueBank, setValueBank] = useState(value);


    function handleChangeBank(namaBank: string) {
        setValueBank(namaBank)
        onChange('namaBank', namaBank, 'gift', index)
    }
    return (
        <div>
            <label className={"text-xs leading-4 font-bold"}>Pilih Bank {index + 1}</label>
            <div className='grid grid-cols-2 gap-4'>
                <img src='/theme/example/svg/logo-bri.svg' height={40} className={twMerge('object-fit  p-2 rounded border-box cursor-pointer', valueBank === 'bri' ? 'border-2 border-blue-400' : '')} onClick={() => handleChangeBank('bri')} />
                <img src='/theme/example/svg/logo-bni.svg' height={40} className={twMerge('object-fit  p-2 rounded border-box cursor-pointer', valueBank === 'bni' ? 'border-2 border-blue-400' : '')} onClick={() => handleChangeBank('bni')} />
                <img src='/theme/example/svg/logo-bca.svg' height={40} className={twMerge('object-fit  p-2 rounded border-box cursor-pointer', valueBank === 'bca' ? 'border-2 border-blue-400' : '')} onClick={() => handleChangeBank('bca')} />
                <img src='/theme/example/svg/logo-madiri.svg' height={40} className={twMerge('object-fit  p-2 rounded border-box cursor-pointer', valueBank === 'madiri' ? 'border-2 border-blue-400' : '')} onClick={() => handleChangeBank('madiri')} />
                <img src='/theme/example/svg/logo-bsi.svg' height={40} className={twMerge('object-fit  p-2 rounded border-box cursor-pointer', valueBank === 'bsi' ? 'border-2 border-blue-400' : '')} onClick={() => handleChangeBank('bsi')} />
            </div>
        </div>
    )
}

export default SelectBank