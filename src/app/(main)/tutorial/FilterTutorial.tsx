'use client'
import Badge from '@/components/badge/Badge'
import InputSearch from '@/components/input/InputSearch'
import { TutorialCategoryType } from '@/type/tutorial'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'


function FilterTutorial({ categories }: { categories: TutorialCategoryType[] }) {
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const categoryUrl = searchParams.get('category')

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div className='w-full lg:w-1/2'>
            <InputSearch className='w-full my-4' placholder='Cari Tutorial' />
            <div className='flex gap-1 justify-between overflow-x-scroll no-scrollbar'>
                <Badge href={pathname} isSelected={categoryUrl === null}>Semua Tutorial</Badge>
                {categories.map((category) => (
                    <Badge href={`${pathname}?${createQueryString('category', category.slug)}`} isSelected={categoryUrl === category.slug} key={category.slug}>{category.title}</Badge>
                ))}
            </div>
        </div>
    )
}

export default FilterTutorial