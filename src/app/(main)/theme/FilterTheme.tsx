'use client'
import Button from '@/components/button/Button'
import InputSearch from '@/components/input/InputSearch'
import { ArrowDownIcon, FilterIcon } from '../../../../public/assets/iconSVG'

function FilterTheme({ children }: { children: React.ReactNode }) {

    return (
        <>
            <InputSearch className="w-full max-w-[628px]" placholder="Cari Tema" />
            <div className="justify-center items-center flex flex-col w-full  overflow-hidden">
                <div className="flex-1 flex justify-center items-center w-full max-w-[768px] z-10 text-neutral-900 py-5">
                    {children}
                </div>
                <div className="flex w-full justify-between lg:absolute lg:px-16">
                    <Button type="Tertiary" className="bg-neutral-50 text-neutral-900">Populer <ArrowDownIcon className=" hover:rotate-180 transition-all" /></Button>
                    <Button type="Tertiary" className="bg-neutral-50 text-neutral-900">Filter <FilterIcon /></Button>
                </div>
            </div>
        </>
    )
}

export default FilterTheme