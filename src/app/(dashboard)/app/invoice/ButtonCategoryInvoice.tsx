'use client'
import Button from '@/components/button/Button'
import { StatusInvoiceType } from '@/type/invoice'

function ButtonCategoryInvoice({ selectCategory, setSelectCategory }: { selectCategory: StatusInvoiceType | 'All', setSelectCategory: React.Dispatch<React.SetStateAction<StatusInvoiceType | 'All'>> }) {
    return (
        <div className='flex justify-between gap-4'>
            <Button onClick={() => setSelectCategory('All')} className={`flex-1 ${selectCategory !== 'All' && 'opacity-50'}`}>All</Button>
            <Button onClick={() => setSelectCategory('Pending')} className={`flex-1 ${selectCategory !== 'Pending' && 'opacity-50'}`}>Pending</Button>
            <Button onClick={() => setSelectCategory('Success')} className={`flex-1 ${selectCategory !== 'Success' && 'opacity-50'}`}>Success</Button>
        </div>
    )
}

export default ButtonCategoryInvoice