'use client'
import { BASE_URL } from '@/utils/baseurl';
import Image from 'next/image'
import Link from 'next/link';

function AuthWithProvider({ type }: { type: 'login' | 'daftar' }) {


    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
                <hr className="flex-1" />
                <span className="text-neutral-400 text-xs">Atau {type} dengan</span>
                <hr className="flex-1" />
            </div>
            <div className="flex justify-center gap-2">
                <Link href={BASE_URL('auth/social/login/facebook')} className="bg-blue-500 hover:bg-blue-700 p-4 rounded">
                    <Image
                        src="/assets/logo/facebook-logo.png"
                        alt="login with facebook"
                        width={100}
                        height={100}
                        className="w-[24px] h-[24px]"
                        priority
                    />
                </Link>
                <Link href={BASE_URL('auth/social/login/google')} className="bg-neutral-50 hover:bg-neutral-200 p-4 rounded">
                    <Image
                        src="/assets/logo/google-logo.png"
                        alt="login with facebook"
                        width={100}
                        height={100}
                        className="w-[24px] h-[24px]"
                        priority
                    />
                </Link>
            </div>
        </div>
    )
}

export default AuthWithProvider