import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import React from 'react'
import Button from '@/components/button/Button';
import { twMerge } from 'tailwind-merge';

function FormEdit({ children, onClose }: any) {
    const minimize = useToggle();
    return (
        <div
            className={twMerge(" text-neutral-900  w-[450px] lg:w-[250px] flex overflow-x-hidden overflow-y-auto fixed mx-auto lg:mx-0 inset-0 z-50 outline-none focus:outline-none", minimize.value ? 'hidden' : '')}
        >
            <div className={clsx("relative w-[450px] max-w-3xl my-auto")}>
                {/*content*/}
                <div className={clsx("pt-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  lg:min-h-screen ")}>
                    <Button onClick={minimize.toggleChange} type='Tertiary' className='text-xl p-0 font-light absolute top-2 right-4 lg:hidden'>x</Button>
                    {/*header*/}
                    {children}
                </div>
            </div >
        </div >
    )
}

export default FormEdit