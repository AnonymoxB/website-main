import { getFormatDate } from '@/app/utils/getFormatDate'
import ButtonModalInvoice from '@/components/button/ButtonModalInvoice'
import { InvoiceType, StatusInvoiceType } from '@/type/invoice'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function TableData({ invoice }: { invoice: InvoiceType }) {

    function classStatusColor(status: StatusInvoiceType) {
        switch (status) {
            case 'Success': return 'text-green-500 bg-green-50';
            case 'Pending': return 'text-orange-500 bg-orange-50';
            case 'Expired': return 'text-red-500 bg-red-50';
            default: return 'text-black bg-neutral-100';

        }
    }
    return (
        <tr className='bg-neutral-100'>
            <td className='text-blue-500 px-2'>{invoice.invoice}</td>
            <td >{invoice.name}</td>
            <td >{getFormatDate(invoice.created_at)}</td>
            <td>Silver</td>
            <td>-</td>
            <td><div className={twMerge(clsx('text-black text-sm px-2 py-1 rounded-full text-center', classStatusColor(invoice.status)))}>{invoice.status}</div></td>
            <td className='flex justify-center py-1'>
                <ButtonModalInvoice invoice={invoice} />
            </td>
        </tr>
    )
}

export default TableData