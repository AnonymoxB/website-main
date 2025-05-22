import React from 'react'
import { HomeIcon } from '../../../public/assets/IconsMenu'
import Link from 'next/link'

function ButtonNavItem({ children, active, label, href }: { children: React.ReactNode, active: boolean, label: string, href: string }) {
    return (
        <Link href={href} className='flex flex-col w-[65px] items-center gap-1'>
            {children}
            <span className={`${active ? 'text-blue-500 text-2xs' : 'text-neutral-300'} text-2xs`}>{label}</span>
        </Link>
    )
}

export default ButtonNavItem