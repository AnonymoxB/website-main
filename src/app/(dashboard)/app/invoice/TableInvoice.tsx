'use client'
import { useEffect, useState } from 'react'
import { getInvoice } from '@/service/api'
import { useAuth } from '@/context/AuthContext';
import { InvoiceType, StatusInvoiceType } from '@/type/invoice';
import ButtonCategoryInvoice from './ButtonCategoryInvoice';
import TableData from './TableData';
import TableDataSkeleton from '@/components/skeleton/TableDataSkeleton';

const fakeDataObject = {
    id: 5,
    user_id: "1",
    package_id: "2",
    invoice: "INV-VOOW-Silver#2510230827240",
    name: "ichsan",
    email: "iccankblog@gmail.com",
    phone_number: "081928323181",
    price: "100000",
    admin_price: "5000",
    price_total: "105000",
    invoice_url: "https://checkout-staging.xendit.co/v2/6538d16f14903d410ccbaf35",
    expiry_date: "2023-10-26 08:27:27",
    rawJson: "",
    status: "Pending",
    created_at: "2023-10-25T08:27:28.000000Z",
    updated_at: "2023-10-25T08:27:28.000000Z"
}
function TableInvoice() {
    const { authToken } = useAuth();
    const [allInvoices, setAllInvoices] = useState<InvoiceType[]>();
    const [invoices, setInvoices] = useState<InvoiceType[]>();
    const [selectCategory, setSelectCategory] = useState<StatusInvoiceType | 'All'>('All')
    const [isLoading, setIsLoading] = useState(true)


    async function getDataInvoice() {
        setIsLoading(true)
        const invoice: InvoiceType[] = await getInvoice(authToken || '');
        setIsLoading(false)
        setAllInvoices(invoice);
        setInvoices(invoice);
    }

    useEffect(() => {
        if (!!authToken) getDataInvoice();
    }, [authToken])

    useEffect(() => {
        if (selectCategory === 'All') {
            setInvoices(allInvoices)
        }
        else {
            const filter = allInvoices?.filter((invoice) => invoice.status === selectCategory)
            setInvoices(filter)
        }
    }, [selectCategory])

    return (
        <>
            <ButtonCategoryInvoice selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            <div className=' flex items-center justify-center w-full'>
                {
                    !!invoices?.length || isLoading ?
                        <div className=' text-neutral-900 w-full'>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='py-2'>Kode</th>
                                        <th>Kepada</th>
                                        <th >Tanggal</th>
                                        <th>Paket</th>
                                        <th>Kupon</th>
                                        <th>Status</th>
                                        <th>Kelola</th>
                                    </tr>
                                </thead>
                                <tbody className='text-sm'>
                                    {!isLoading ? !!invoices && invoices.map((invoice) => (
                                        <TableData key={invoice.id} invoice={invoice} />
                                    )) :
                                        <TableDataSkeleton col={7} row={3} />
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className='mt-4 flex-1 flex flex-col items-center justify-center gap-2.5'>
                            <svg width="87" height="86" viewBox="0 0 87 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.8">
                                    <path d="M25.5835 46.5835H39.9168" stroke="url(#paint0_linear_2082_4166)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M54.25 46.5835H61.4167" stroke="url(#paint1_linear_2082_4166)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25.5835 32.2501H32.7502" stroke="url(#paint2_linear_2082_4166)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M47.0835 32.2501H61.4168" stroke="url(#paint3_linear_2082_4166)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M75.75 53.7502C75.75 55.6509 74.9949 57.4738 73.6509 58.8178C72.3069 60.1618 70.4841 60.9169 68.5833 60.9169H25.5833L11.25 75.2503V17.9167C11.25 16.016 12.0051 14.1931 13.3491 12.8491C14.6931 11.5051 16.5159 10.75 18.4167 10.75H68.5833C70.4841 10.75 72.3069 11.5051 73.6509 12.8491C74.9949 14.1931 75.75 16.016 75.75 17.9167V53.7502Z" stroke="url(#paint4_linear_2082_4166)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_2082_4166" x1="32.7502" y1="46.5835" x2="32.7502" y2="47.5835" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00C1FF" />
                                        <stop offset="1" stopColor="#0061FF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2082_4166" x1="57.8333" y1="46.5835" x2="57.8333" y2="47.5835" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00C1FF" />
                                        <stop offset="1" stopColor="#0061FF" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2082_4166" x1="29.1668" y1="32.2501" x2="29.1668" y2="33.2501" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00C1FF" />
                                        <stop offset="1" stopColor="#0061FF" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2082_4166" x1="54.2502" y1="32.2501" x2="54.2502" y2="33.2501" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00C1FF" />
                                        <stop offset="1" stopColor="#0061FF" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2082_4166" x1="43.5" y1="10.75" x2="43.5" y2="75.2503" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#00C1FF" />
                                        <stop offset="1" stopColor="#0061FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h2 className='text-neutral-900 font-bold'>Oops!</h2>
                            <p className='text-neutral-500 text-sm'>Tidak ada data transaksi pada kategori yang kamu pilih.</p>
                        </div>
                }
            </div >
        </>
    )
}
export default TableInvoice