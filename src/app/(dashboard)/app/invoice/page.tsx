import HeaderDashboard from '@/components/header/HeaderDashboard'
import TableInvoice from './TableInvoice'

function page() {
    return (
        <main className='bg-neutral-50 flex-1 min-h-screen px-4 flex flex-col'>
            <HeaderDashboard title='Invoice' />
            <section className='flex flex-1 flex-col gap-y-[20px]'>
                <TableInvoice />
            </section>
        </main>
    )
}

export default page