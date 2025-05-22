'use client'
import { useRouter } from 'next/navigation';
import Button from '../button/Button'
import Link from 'next/link';

function HeaderDashboard({ title }: { title: string }) {
    const route = useRouter();
    return (
        <header className='flex justify-between mb-4 py-4 sticky top-0 z-10 bg-neutral-50 items-center'>
            <h1 className='text-neutral-900 font-bold lg:text-3xl text-xl'>{title}</h1>
            <div className='flex gap-4'>
                <Button
                    onClick={() => route.push('/theme')}
                    iconLeft={
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1781_3722)">
                                <path d="M8.00001 15.1667C11.6819 15.1667 14.6667 12.1819 14.6667 8.50001C14.6667 4.81811 11.6819 1.83334 8.00001 1.83334C4.31811 1.83334 1.33334 4.81811 1.33334 8.50001C1.33334 12.1819 4.31811 15.1667 8.00001 15.1667Z" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 5.83334V11.1667" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.33334 8.5H10.6667" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1781_3722">
                                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                    }
                >Buat Undangan</Button>
                <Link href='/app/profile' className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full w-12 h-12 flex items-center justify-center'>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 12.9487C11.7704 12.9487 10.2929 12.3359 9.06739 11.1105C7.84195 9.88507 7.22923 8.40754 7.22923 6.67793C7.22923 4.94828 7.84195 3.47074 9.06739 2.2453C10.2929 1.01986 11.7704 0.407135 13.5 0.407135C15.2296 0.407135 16.7072 1.01986 17.9326 2.2453C19.1581 3.47074 19.7708 4.94828 19.7708 6.67793C19.7708 8.40754 19.1581 9.88507 17.9326 11.1105C16.7072 12.3359 15.2296 12.9487 13.5 12.9487ZM2.78446 26.5929C2.02877 26.5929 1.3862 26.3282 0.856762 25.7987C0.327294 25.2692 0.062561 24.6267 0.062561 23.871V22.6099C0.062561 21.7325 0.300882 20.9199 0.777525 20.1723C1.25414 19.4246 1.89097 18.8498 2.68802 18.4478C4.45903 17.5795 6.24553 16.9283 8.04753 16.4942C9.84952 16.0601 11.667 15.843 13.5 15.843C15.333 15.843 17.1505 16.0601 18.9525 16.4942C20.7545 16.9283 22.541 17.5795 24.312 18.4478C25.1091 18.8498 25.7459 19.4246 26.2225 20.1723C26.6992 20.9199 26.9375 21.7325 26.9375 22.6099V23.871C26.9375 24.6267 26.6727 25.2692 26.1433 25.7987C25.6138 26.3282 24.9713 26.5929 24.2156 26.5929H2.78446Z" fill="#F9FAFB" />
                    </svg>
                </Link>
            </div>
        </header>
    )
}

export default HeaderDashboard