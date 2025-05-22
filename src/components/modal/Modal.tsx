'use client'
import { useState } from 'react'
import Button from '../button/Button'
import { twMerge } from 'tailwind-merge'

export interface ModalComponentProps {
    children: React.ReactNode,
    onClose: () => void,
    onSubmit?: () => void,
    modalTitle: string,
    footer?: React.ReactNode,
    visible: boolean,
    className?: string,
    contentClassName?: string,
    footerClassName?: string,
    headerClassName?: string,
    params?: string,
    data?:any
    getAllDataRsvp?:()=>void
    invitationId?:string
}

function Modal({ children, onClose, onSubmit, modalTitle, footer, visible, className, contentClassName, headerClassName, footerClassName }: ModalComponentProps) {
    if (!visible) return
    return (
        <>
            <div
                className="justify-center text-neutral-900 items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none h-screen "
            >
                <div className="relative w-[450px] my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className={twMerge("border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", className)}>
                        {/*header*/}
                        <div className={twMerge("flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t", headerClassName)}>
                            <h3 className="text-xl  text-neutral-900">
                                {modalTitle}
                            </h3>
                            <Button onClick={onClose} type='Tertiary' className='text-xl p-0 font-light'>x</Button>
                        </div>
                        {/*body*/}
                        <div className={twMerge("relative pb-6 flex-auto max-h-[75vh] overflow-y-auto", contentClassName)}>
                            {children}
                        </div>
                        {/*footer*/}
                        <div className={twMerge("flex flex-col items-center justify-end  border-blueGray-200 rounded-b py-2 px-6", footerClassName)}>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal