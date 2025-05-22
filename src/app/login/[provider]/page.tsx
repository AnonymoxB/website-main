'use client'
import { useAuth } from '@/context/AuthContext';
import { setToken } from '@/utils/auth';
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

function Page({ params }: { params: { provider: string } }) {
    const { getProfile } = useAuth();
    const route = useRouter();
    const searchParams = useSearchParams()

    if (params.provider !== "google") {
        route.replace('/login');
    }

    const token = searchParams.get('token')

    useEffect(() => {
        if (token) {
            setToken(token);
            if (!!getProfile) {
                getProfile();
            }
            route.replace('/app')
        }
    }, [token])

    return null
}

export default Page