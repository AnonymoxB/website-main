'use client'
import Image from 'next/image'
import { DiamondIcon } from '../../../../public/assets/iconSVG'
import Button from '@/components/button/Button'
import { useAuth } from '@/context/AuthContext'

function SectionUserInfo() {
    const { user } = useAuth();
    return (
        <div className='bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end p-[30px] rounded-2xl flex flex-col lg:flex-row gap-2.5'>
            <div className='flex gap-7 flex-1'>
                <div className='w-[100px] h-[100px]'>
                    <Image
                        src='/assets/image/UserDefault.png'
                        alt='user'
                        width={100}
                        height={100}
                        className='rounded-full aspect-square object-cover'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className="flex gap-1">
                        <DiamondIcon color='#FFF' />
                        <h3>Gratis</h3>
                    </div>
                    <h3 className='font-bold text-4xl'>{user?.name}</h3>
                    <p>{user?.email}</p>
                </div>
            </div>
            <div className='flex lg:flex-col flex-row gap-2.5 mt-4'>
                <Button className='bg-white text-blue-500 flex-1'>Upgrade Akun Saya</Button>
                <Button type='Secondary' className='flex-1'>Cek Promo Terbaru</Button>
            </div>
        </div>
    )
}

export default SectionUserInfo