'use client'
import { useRouter } from 'next/navigation'
import Button from './Button'
import { useAuth } from '@/context/AuthContext';
import { payPackage } from '@/service/api';
import { BuyPackageType } from '@/type/price';
import { useState } from 'react';
import { Notyf } from "notyf";


function ButtonSelectPackage({ id }: { id: number }) {
    const { authToken, user } = useAuth();
    const route = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function selectPackage() {
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
        const buy: BuyPackageType = await payPackage(authToken, user?.email, user?.name, user?.phone_number, id);
        setIsLoading(false);
        if (buy) {
            route.push('/app/invoice')
        }

    }


    return (
        <Button isLoading={isLoading} disabled={isLoading} onClick={selectPackage} size='large' type='Secondary' className='bg-transparent text-blue-500 border-blue-500'>Pilih Paket</Button>

    )
}

export default ButtonSelectPackage