import Image from 'next/image'
import React from 'react'

interface CardPembayaranProps {
    src: string,
    alt: string
}

function CardPembayaran({ src, alt }: CardPembayaranProps) {
    return (
        <div className='h-20 w-[104px] bg-neutral-50 flex items-center justify-center p-4 rounded-xl'>
            <Image
                src={src}
                alt={alt || 'transfer'}
                width={100}
                height={100}
                className='object-contain'
            />
        </div>
    )
}

export default CardPembayaran