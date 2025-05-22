import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='bg-neutral-50 min-h-screen min-w-screen flex flex-col items-center justify-center gap-4'>
            <Image
                src='/assets/image/notfound.png'
                width={328}
                height={538}
                alt='notfound'
                priority
            />
            <div className='flex flex-col items-center'>
                <h1 className='text-blue-500 font-bold text-8xl'>404</h1>
                <h2 className='text-neutral-900 font-bold text-4xl'>Page Not Found</h2>
            </div>
            <p className='text-black text-lg'>Sorry, the page you’re looking for is not found or never existed</p>
            <p className='text-black text-lg'>Go back to <Link href='/'>Home</Link></p>ß
        </div>
    )
}