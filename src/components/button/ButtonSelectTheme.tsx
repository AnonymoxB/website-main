'use client'
import { useRouter } from 'next/navigation'
import Button from './Button'
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { Notyf } from "notyf";
import { InvitationType } from '@/type/invitation';
import { createInvitation } from '@/service/api';

function ButtonSelectTheme({ id }: { id: number }) {
    const { authToken, user } = useAuth();
    const route = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function selectTheme() {
        const notify = new Notyf({ position: { x: "right", y: "top" }, duration: 5000 });

        if (!authToken) {
            notify.error('Silahkan login terlebih dahulu');
            route.push('/login')
            return
        }

        if (!user?.email || !user?.phone_number) {
            notify.error('Silahkan lengkapi profil anda');
            route.push('/app/profile')
            return
        }

        setIsLoading(true);
        try {
            const buy = await createInvitation(authToken, id);
            if (buy.code === 200) {
                notify.success(buy.message);
                route.push('app/invitation-list')
            }
            else if (buy.code === 400) {
                notify.error(buy.message);
                route.push('/price')
            }
            else {
                notify.error('Terjadi kesalahan');
            }
        } catch (error) {
            notify.error('Terjadi kesalahan');
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <Button isLoading={isLoading} disabled={isLoading} onClick={selectTheme} size='large' type='Secondary' className='bg-transparent text-blue-500 border-blue-500 flex-1'>Pilih Paket</Button>
    )
}

export default ButtonSelectTheme
