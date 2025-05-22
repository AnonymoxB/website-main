'use client'
import Button from '@/components/button/Button';
import HeaderDashboard from '@/components/header/HeaderDashboard';
import Input from '@/components/input/Input';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { updateProfile } from '@/service/api';
import { useAuth } from '@/context/AuthContext';
import usePickImage from '@/hooks/usePickImage';

function Page() {
    const { authToken, user, getProfile } = useAuth();
    const { fileImage, preview, setPreview, onSelectFile } = usePickImage();
    const [nama, setNama] = useState<string>(user?.name || '');
    const [kodePos, setKodePos] = useState<string>(user?.postal_code || '');
    const [noWa, setNoWa] = useState<string>(user?.phone_number || '');
    const [isLoadingPage, setIsLoadingPage] = useState(false)

    useEffect(() => {
        if (getProfile) getProfile();
    }, [])

    useEffect(() => {
        if (!user) return
        setNama(user?.name)
        setKodePos(user?.postal_code)
        setNoWa(user?.phone_number)
        setPreview(user?.avatar)
    }, [user])


    const handleUpdateProfile = async () => {

        // NOTE BUATKAN NANTI PENGECEKAN NAMA DAN NOMOR WA, WAJIB!!

        const formdata = new FormData();

        if (fileImage) formdata.append('avatar', fileImage);

        formdata.append('name', nama);
        formdata.append('postal_code', kodePos);
        formdata.append('phone_number', noWa);

        if (!authToken) {
            return;
        }


        const result = await updateProfile(authToken, formdata);

        if (result) {
            // reload
            window.location.reload();
        }
    };

    return (
        <main className='bg-neutral-50 flex-1 min-h-screen px-4'>
            <HeaderDashboard title='Edit Profile' />
            <section className='flex flex-col gap-y-[20px]'>
                <form className='bg-neutral-100 p-4 rounded-xl md:max-w-[424px] w-full flex flex-col gap-y-4'>
                    <div>
                        <label className='text-neutral-700 cursor-pointer text-xs leading-4 font-bold'>
                            Foto Profile
                            <div className='mt-3 p-4 rounded-lg border-2 border-dashed border-blue-300 flex justify-center'>
                                {
                                    preview ?
                                        <Image src={preview || ""} alt="foto profile" width={384} height={384} />
                                        :
                                        <svg width="384" height="384" viewBox="0 0 220 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M109.96 103.455C95.8268 103.455 83.7536 98.4479 73.7401 88.4346C63.7268 78.4213 58.7202 66.3482 58.7202 52.2152C58.7202 38.082 63.7268 26.0088 73.7401 15.9955C83.7536 5.98223 95.8268 0.975586 109.96 0.975586C124.093 0.975586 136.166 5.98223 146.18 15.9955C156.193 26.0088 161.199 38.082 161.199 52.2152C161.199 66.3482 156.193 78.4213 146.18 88.4346C136.166 98.4479 124.093 103.455 109.96 103.455ZM22.4012 214.944C16.2263 214.944 10.9758 212.78 6.6497 208.454C2.32333 204.128 0.160156 198.877 0.160156 192.702V182.398C0.160156 175.228 2.10752 168.589 6.00224 162.48C9.89673 156.37 15.1004 151.673 21.6132 148.389C36.0844 141.294 50.6822 135.973 65.4066 132.426C80.131 128.878 94.9821 127.105 109.96 127.105C124.937 127.105 139.789 128.878 154.513 132.426C169.237 135.973 183.835 141.294 198.306 148.389C204.819 151.673 210.023 156.37 213.917 162.48C217.812 168.589 219.759 175.228 219.759 182.398V192.702C219.759 198.877 217.596 204.128 213.27 208.454C208.944 212.78 203.693 214.944 197.518 214.944H22.4012Z" fill="#0181FF" />
                                        </svg>
                                }
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={onSelectFile} />
                        </label>
                    </div>
                    <Input isOptional={false} setValue={setNama} label='Nama Lengkap' placeholder='Masukkan nama kamu' labelStyle='text-neutral-700' value={nama} />
                    <Input isOptional={true} setValue={setKodePos} label='Kode Pos ' placeholder='Masukkan kode pos kamu' labelStyle='text-neutral-700' value={kodePos} />
                    <Input isOptional={false} setValue={setNoWa} label='Whatsapp Aktif' placeholder='0812345678' labelStyle='text-neutral-700' value={noWa} />
                    <Button isLoading={isLoadingPage} onClick={handleUpdateProfile} type='Primary' className='bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white'>Update Profile</Button>
                    <Button type='Tertiary' className='border-[1px] border-blue-500 text-blue-500' >Logout</Button>
                </form>
            </section>
        </main>
    )
}

export default Page