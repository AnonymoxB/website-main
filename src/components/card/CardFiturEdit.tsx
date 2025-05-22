import Image from 'next/image'
import { title } from 'process'
import React, { ReactNode } from 'react'

function CardFiturEdit({ src, title, children, onClick }: { src: string, title: string, children?: ReactNode, onClick?: () => void }) {
    return (
        <>
            <button onClick={onClick} className='bg-neutral-100 border-neutral-200 border-[1px] rounded-2xl flex flex-col items-center gap-y-2 h-[93px] justify-center text-neutral-700'>
                <Image
                    src={src}
                    alt='Tema'
                    width={45}
                    height={45}
                />
                {title}
            </button>
            {children}
        </>
    )
}

export default CardFiturEdit