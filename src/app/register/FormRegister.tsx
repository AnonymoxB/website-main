'use client'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InputPassword from '@/components/input/InputPassword'
import { registerAPI } from '@/service/api'
import { setToken } from '@/utils/auth'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/navigation'
import ReactLoading from "react-loading";


function FormRegister() {

    const router = useRouter();
    const { setAuthToken, getProfile } = useAuth();

    const [nama, setNama] = useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [message, setMessage] = useState<any>(null);

    const [isLoading, setIsloading] = useState(false);

    async function handleSubmit() {
        setMessage(null);
        if (!nama) return setMessage({ nama: 'Nama harus diisi' });
        if (!email) return setMessage({ email: 'Email harus diisi' });
        if (!nomorTelepon) return setMessage({ nomorTelepon: 'Nomor Telepon harus diisi' });
        if (!password) return setMessage({ password: 'Password harus diisi' });
        if (!confirmPassword) return setMessage({ confirmPassword: 'Konfirmasi Password harus diisi' });
        if (password !== confirmPassword) return setMessage({ confirmPassword: 'Konfirmasi Password tidak sesuai' });

        setIsloading(true)
        const response = await registerAPI({
            email: email,
            name: nama,
            telphone_number: nomorTelepon,
            password: password,
            password_confirmation: confirmPassword
        });


        if (response?.token) {
            setToken(response.token);
            if (!!setAuthToken) {
                setAuthToken(response.token);
            }

            if (!!getProfile) {
                getProfile();
            }
            router.replace('/app')
        } else {
            if (response.code === 400) {
                setMessage(response.data);
            }
        }

        setIsloading(false)
    }

    return (
        <form className="flex flex-col gap-6">
            <Input disabled={isLoading} caption={message?.nama} value={nama} setValue={setNama} label="Nama" type="text" name="nama" id="nama" />
            <Input disabled={isLoading} caption={message?.email} value={email} setValue={setEmail} label="Email" type="email" name="email" id="email" />
            <Input disabled={isLoading} caption={message?.nomorTelepon} value={nomorTelepon} setValue={setNomorTelepon} label="Nomor Telepon" type="text" name="nomor-telepon" id="nomor-telepon" />
            <InputPassword disabled={isLoading} caption={message?.password} value={password} setValue={setPassword} label="Password" name="password" id="password" />
            <InputPassword disabled={isLoading} caption={message?.confirmPassword} value={confirmPassword} setValue={setConfirmPassword} label="Konfirmasi Password" name="confirm-password" id="confirm-password" />
            <Button disabled={isLoading} size="large" onClick={handleSubmit}>
                {isLoading ? <ReactLoading type={'bars'} color="#fff" height={20} width={20} /> : 'Daftar'}
            </Button>
        </form>
    )
}

export default FormRegister