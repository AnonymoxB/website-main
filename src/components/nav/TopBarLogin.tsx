'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

function TopBarLogin() {
    const currentRoute = usePathname();
    const pageActive = currentRoute?.split("/")[1]



    return (
        <nav className="hidden md:flex w-full justify-between h-20 pl-6 pr-10 items-center">
            <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.6429 7.5644C33.7255 15.5007 27.9241 24.8629 23.9274 31.3203C22.1226 34.2374 17.8774 34.2374 16.0726 31.3203C11.1674 23.4003 6.2622 15.4844 1.35702 7.5644C-0.887799 3.93848 2.55072 -0.514485 6.63294 0.711811C8.14035 1.16403 9.74553 1.56737 11.4485 1.88514C13.7341 2.317 15.3759 4.32552 15.3759 6.65181V13.8222C15.3759 16.3318 17.3274 18.4666 19.837 18.5522C22.4648 18.6459 24.6241 16.5396 24.6241 13.9322V6.65181C24.6241 4.32959 26.2659 2.317 28.5474 1.88514C30.2585 1.56329 31.8718 1.15996 33.3833 0.703663C37.4574 -0.522633 40.8837 3.94255 38.6429 7.5644Z" fill="url(#paint0_linear_1354_2473)" />
                <defs>
                    <linearGradient id="paint0_linear_1354_2473" x1="41.8411" y1="-3.41115" x2="32.1611" y2="42.5933" gradientUnits="userSpaceOnUse">
                        <stop offset="0.115" stopColor="#00C1FF" />
                        <stop offset="1" stopColor="#0061FF" />
                    </linearGradient>
                </defs>
            </svg>
            <ul className="text-base leading-6 text-neutral-400 flex gap-6">
                <Link href='/' className={twMerge(clsx(" hover:text-blue-500 md:text-sm lg:text-base ", pageActive === "/" ? "text-blue-500" : "tex-neutral-400"))}>Beranda</Link>
                <Link href='/theme' className={twMerge(clsx(" hover:text-blue-500 md:text-sm lg:text-base ", pageActive === "/theme" ? "text-blue-500" : "tex-neutral-400"))}>Tema</Link>
                <Link href='/price' className={twMerge(clsx(" hover:text-blue-500 md:text-sm lg:text-base ", pageActive === "/price" ? "text-blue-500" : "tex-neutral-400"))}>Harga</Link>
                <Link href='/tutorial' className={twMerge(clsx(" hover:text-blue-500 md:text-sm lg:text-base ", pageActive === "/tutorial" ? "text-blue-500" : "tex-neutral-400"))}>Tutorial</Link>
                <Link href='/blog' className={twMerge(clsx(" hover:text-blue-500 md:text-sm lg:text-base ", pageActive === "/blog" ? "text-blue-500" : "tex-neutral-400"))}>Blog</Link >
            </ul >
        </nav >
    )
}

export default TopBarLogin