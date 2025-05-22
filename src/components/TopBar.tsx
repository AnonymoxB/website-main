'use client'
import React, { useEffect, useState } from 'react'
import Button from './button/Button'
import Logo from '../../public/assets/Logo'
import { twMerge } from 'tailwind-merge'
import { useWindowSize } from '@/app/utils/useWindowSize'
import { MD } from '@/const/dimensions'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

function TopBar({ className, isWhite }: { className?: string, isWhite?: boolean }) {
  const currentRoute = usePathname();
  const { user } = useAuth();

  const pageActive = currentRoute?.split("/")[1]
  const [width] = useWindowSize();

  return (
    <div id='navbar' className='lg:bg-white bg-transparent w-screen fixed top-0 left-0 z-50'>
      <header className={twMerge(`flex w-full flex-row justify-between lg:px-20 container container-2xl mx-auto px-4 md:px-0 py-4 bg-white items-center ${className}`)}>
        <Logo size={0} isWhite={isWhite} />
        {width > MD ?
          <nav className='hidden md:flex gap-4 items-center lg:gap-9'>
            <ul className='flex lg:gap-6 gap-2 '>
              <li className={twMerge(clsx('text-neutral-400 hover:text-blue-500 md:text-sm lg:text-base ', pageActive == "" ? "text-blue-500" : "tex-neutral-400"))}>
                <Link href='/'>
                  Beranda
                </Link>
              </li>
              <li className={twMerge(clsx('text-neutral-400 hover:text-blue-500 md:text-sm lg:text-base ', pageActive == "theme" ? "text-blue-500" : "tex-neutral-400"))}>
                <Link href='/theme'>
                  Tema
                </Link>
              </li>
              <li className={twMerge(clsx('text-neutral-400 hover:text-blue-500 md:text-sm lg:text-base ', pageActive == "price" ? "text-blue-500" : "tex-neutral-400"))}>
                <Link href='/price'>
                  Harga
                </Link>
              </li>
              <li className={twMerge(clsx('text-neutral-400 hover:text-blue-500 md:text-sm lg:text-base ', pageActive == "tutorial" ? "text-blue-500" : "tex-neutral-400"))}>
                <Link href='/tutorial'>
                  Tutorial
                </Link>
              </li>
              <li className={twMerge(clsx('text-neutral-400 hover:text-blue-500 md:text-sm lg:text-base ', pageActive == "blog" ? "text-blue-500" : "tex-neutral-400"))}>
                <Link href='/blog'>
                  Blog
                </Link>
              </li>
              <li className={twMerge(clsx('text-neutral-400 hover:text-blue-500 md:text-sm lg:text-base cursor-pointer ', pageActive == "blog" ? "text-blue-500" : "tex-neutral-400"))}>
                <span className='hidden lg:block'>Promo</span>
              </li>
            </ul>
            {!!user ?
              <Link href='/app'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-full flex items-center justify-center'>
                  <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 12.9487C11.7704 12.9487 10.2929 12.3359 9.06739 11.1105C7.84195 9.88507 7.22923 8.40754 7.22923 6.67793C7.22923 4.94828 7.84195 3.47074 9.06739 2.2453C10.2929 1.01986 11.7704 0.407135 13.5 0.407135C15.2296 0.407135 16.7072 1.01986 17.9326 2.2453C19.1581 3.47074 19.7708 4.94828 19.7708 6.67793C19.7708 8.40754 19.1581 9.88507 17.9326 11.1105C16.7072 12.3359 15.2296 12.9487 13.5 12.9487ZM2.78446 26.5929C2.02877 26.5929 1.3862 26.3282 0.856762 25.7987C0.327294 25.2692 0.062561 24.6267 0.062561 23.871V22.6099C0.062561 21.7325 0.300882 20.9199 0.777525 20.1723C1.25414 19.4246 1.89097 18.8498 2.68802 18.4478C4.45903 17.5795 6.24553 16.9283 8.04753 16.4942C9.84952 16.0601 11.667 15.843 13.5 15.843C15.333 15.843 17.1505 16.0601 18.9525 16.4942C20.7545 16.9283 22.541 17.5795 24.312 18.4478C25.1091 18.8498 25.7459 19.4246 26.2225 20.1723C26.6992 20.9199 26.9375 21.7325 26.9375 22.6099V23.871C26.9375 24.6267 26.6727 25.2692 26.1433 25.7987C25.6138 26.3282 24.9713 26.5929 24.2156 26.5929H2.78446Z" fill="#F9FAFB" />
                  </svg>
                </button>
              </Link>

              :
              <Link href='/login'>
                <Button className='flex w-[200px] gap-2 items-center' size='small'>
                  Daftar & Coba Gratis
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6269 8.75003H1.25C1.03718 8.75003 0.858983 8.67824 0.7154 8.53465C0.5718 8.39107 0.5 8.21287 0.5 8.00005C0.5 7.78724 0.5718 7.60904 0.7154 7.46545C0.858983 7.32187 1.03718 7.25008 1.25 7.25008H12.6269L7.45768 2.08083C7.30896 1.93211 7.23557 1.75808 7.2375 1.55873C7.23942 1.35936 7.31794 1.18212 7.47308 1.027C7.62819 0.882138 7.80382 0.807138 7.99997 0.802004C8.19612 0.796871 8.37176 0.871871 8.52687 1.027L14.8672 7.36738C14.9608 7.46096 15.0269 7.55968 15.0653 7.66353C15.1038 7.76736 15.123 7.87954 15.123 8.00005C15.123 8.12057 15.1038 8.23275 15.0653 8.33658C15.0269 8.44043 14.9608 8.53915 14.8672 8.63273L8.52687 14.9731C8.38842 15.1116 8.21696 15.1824 8.01248 15.1856C7.80799 15.1888 7.62819 15.118 7.47308 14.9731C7.31794 14.818 7.24038 14.6398 7.24038 14.4385C7.24038 14.2372 7.31794 14.059 7.47308 13.9039L12.6269 8.75003Z" fill="#E6F2FF" />
                  </svg>
                </Button>
              </Link>
            }
          </nav>
          :
          <Button className={`flex md:hidden ${!!isWhite && 'bg-white text-blue-500'}`} size='small'>
            % Promo
          </Button>
        }
      </header>
    </div>
  )
}

export default TopBar