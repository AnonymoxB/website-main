'use client'

import { useRouter } from "next/navigation"
import Button from "./Button"

interface ButtonSidebarProps {
    href: string
    label: string
    icon: React.ReactNode
    isActive: boolean
}

function ButtonSidebar({ href, label, icon, isActive }: ButtonSidebarProps) {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(href)} position='left' iconLeft={icon} className={` w-full font-bold ${isActive ? '' : ' hover:bg-neutral-200'}`} type={`${isActive ? 'Primary' : 'Tertiary'}`}>{label}</Button>
    )
}

export default ButtonSidebar