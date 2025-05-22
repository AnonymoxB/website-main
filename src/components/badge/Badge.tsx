import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function Badge({ children, isSelected, href = '' }: { children: React.ReactNode, isSelected?: boolean, href?: string }) {
    return (
        <Link href={href} className={clsx(twMerge('flex items-center justify-center text-sm md:text-base text-neutral-500 px-2.5 py-2.5 rounded-full border-blue-500 hover:border-[1px] hover:text-blue-500 min-w-[150px] md:min-w-[200px] text-center', isSelected && 'border-[1px] text-blue-500'))}>{children}</Link>
    )
}

export default Badge