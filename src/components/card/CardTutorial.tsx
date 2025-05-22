'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
import { ArrowRightIcon } from '../../../public/assets/iconSVG'
import { useRouter } from 'next/navigation'
import { TutorialType } from '@/type/tutorial'

function CardTutorial({ tutorial }: { tutorial: TutorialType }) {
    const router = useRouter();
    return (
        <div className='lg:max-w-[350px] w-full rounded-xl border-[1px] border-neutral-100'>
            <div className='lg:max-w-[350px] w-full h-[309px] border-[1px] border-neutral-100 rounded-t-xl'>
                <Image
                    src={tutorial.image}
                    width={1000}
                    height={1000}
                    alt='tutorial'
                    className='h-full w-full object-cover rounded-t-xl'
                />
            </div>
            <div className='flex flex-col p-4 gap-4'>
                <h5 className='text-sm md:text-2xl text-neutral-900'>{tutorial.title}</h5>
                <hr className='h-[1px]' />
                <div className="flex">
                    <Button onClick={() => router.push(`/tutorial/${tutorial.slug}`)} className='bg-transparent text-blue-500 p-0' type='Tertiary' size='medium' iconRight={<ArrowRightIcon color='#0181FF' />}>
                        Lihat Tutorial
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardTutorial