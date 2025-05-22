'use client'
import Logo from '../../public/assets/Logo'
import { DashboardUserIcon, EditProfileUserIcon, InvoiceUserIcon, LogoutUserIcon, MyInvitationUserIcon, QRCodeUserIcon, ThemeIcon, TutorialUserIcon } from '../../public/assets/IconsMenu'
import { usePathname } from 'next/navigation'
import ButtonSidebar from './button/ButtonSidebar'
import Button from './button/Button'
import { useAuth } from '@/context/AuthContext'

function Sidebar() {
    const { logout } = useAuth();
    const currentRoute = usePathname();
    const pageActive = currentRoute?.split("/").length > 2 ? currentRoute.split("/")[2] : "";

    return (
        <aside className='hidden w-2/12 min-w-[250px] max-w-[338px] h-screen lg:flex flex-col items-center bg-neutral-100'>
            <div className='p-4'>
                <Logo />
            </div>
            <nav className='text-neutral-500 w-full px-4 h-full flex flex-col justify-between'>
                <ul className='flex flex-col gap-4'>
                    <li><ButtonSidebar
                        href='/app'
                        icon={<DashboardUserIcon color={pageActive === '' ? 'white' : '#6B7280'} />}
                        label='Dashboard'
                        isActive={pageActive === ''} />
                    </li>
                    <li><ButtonSidebar
                        href='/app/invitation-list'
                        icon={<MyInvitationUserIcon color={pageActive === 'invitation-list' ? 'white' : '#6B7280'} />}
                        label='Undangan Saya'
                        isActive={pageActive === 'invitation-list'} />
                    </li>
                    <li><ButtonSidebar
                        href='/app/qrcode'
                        icon={<QRCodeUserIcon color={pageActive === 'qrcode' ? 'white' : '#6B7280'} />}
                        label='QR Code'
                        isActive={pageActive === 'qrcode'} />
                    </li>
                    <li><ButtonSidebar
                        href='/app/invoice'
                        icon={<InvoiceUserIcon color={pageActive === 'invoice' ? 'white' : '#6B7280'} />}
                        label='Invoice'
                        isActive={pageActive === 'invoice'} />
                    </li>
                    <li><ButtonSidebar
                        href='/tutorial'
                        icon={<TutorialUserIcon />}
                        label='Tutorial'
                        isActive={false} />
                    </li>
                    <li><ButtonSidebar
                        href='/app/profile'
                        icon={<EditProfileUserIcon color={pageActive === 'profile' ? 'white' : '#6B7280'} />}
                        label='Ubah Profile'
                        isActive={pageActive === 'profile'} />
                    </li>
                    <li>
                        <Button
                            onClick={logout}
                            position='left'
                            iconLeft={<LogoutUserIcon />}
                            className={`w-full hover:bg-neutral-300'}`}
                            type='Tertiary'
                        >
                            Logout
                        </Button>

                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar