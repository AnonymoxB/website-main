import React, { ChangeEvent } from 'react'

function ImagePreview({ label, imagePreview, onChange }: { label: string, imagePreview: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="flex flex-col gap-1">
            <label className='cursor-pointer text-xs leading-4 font-bold'>
                {label}
                <div className='mt-3 p-2 rounded-lg border-2 border-dashed border-blue-300 flex justify-center'>
                    {
                        imagePreview ?
                            <div style={{ backgroundImage: `url(${imagePreview})` }} className='w-full bg-cover bg-center aspect-square	'></div>
                            :
                            <div className='w-full aspect-video bg-slate-200  flex justify-center items-center text-black'>
                                Select File
                            </div>
                    }
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={onChange} />
            </label>
        </div>
    )
}

export default ImagePreview