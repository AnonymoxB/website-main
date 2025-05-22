'use client'
import { AccountIcon, HomeIcon, PriceIcon, ThemeIcon, TutorialIcon } from '../../public/assets/IconsMenu'
import ButtonNavItem from './button/ButtonNavItem'
import { usePathname } from 'next/navigation';
import { useWindowSize } from '@/app/utils/useWindowSize';
import { MD } from '@/const/dimensions';


function Navbar() {
    const currentRoute = usePathname();
    const pageActive = currentRoute?.split("/")[1]

    const [width] = useWindowSize();
    if (width > MD) return

    return (
        <nav className='md:hidden fixed bottom-0 left-0 right-0 z-10 px-4 py-2 bg-white flex justify-between'>
            <ButtonNavItem href='/' active={pageActive === '/'} label='Beranda'>
                <HomeIcon active={pageActive === '/'} size={30} />
            </ButtonNavItem>
            <ButtonNavItem href='/price' active={pageActive === '/price'} label='Harga'>
                <PriceIcon active={pageActive === '/price'} size={30} />
            </ButtonNavItem>
            <ButtonNavItem href='/theme' active={pageActive === '/theme'} label='Tema'>
                <ThemeIcon active={pageActive === '/theme'} size={30} />
            </ButtonNavItem>
            <ButtonNavItem href='/tutorial' active={pageActive === '/tutorial'} label='Tutorial'>
                <TutorialIcon active={pageActive === '/tutorial'} size={30} />
            </ButtonNavItem>
            <ButtonNavItem href='/login' active={pageActive === '/register' || pageActive === '/login'} label='Akun'>
                <AccountIcon active={pageActive === '/register' || pageActive === '/login'} size={30} />
            </ButtonNavItem>
        </nav>
    )
}

export default Navbar