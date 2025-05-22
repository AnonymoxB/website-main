'use client'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InputPassword from '@/components/input/InputPassword'
import { loginAPI } from '@/service/api'
import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { setToken } from '@/utils/auth'
import { useRouter } from 'next/navigation'
import ReactLoading from "react-loading";


function FormLogin() {
    const route = useRouter();
    const { setAuthToken, getProfile } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captionMessage, setCaptionMessage] = useState('');

    const [isLoading, setIsloading] = useState(false);


    async function handleSubmit() {
        setCaptionMessage('');

        if (!email || !password) {
            setCaptionMessage('Email dan Password harus diisi');
            return
        }

        setIsloading(true)
        const response = await loginAPI({
            email: email,
            password: password
        });


        if (response?.token) {
            setToken(response.token);
            if (!!setAuthToken) {
                setAuthToken(response.token);
            }
            if (!!getProfile) {
                getProfile();
            }
            route.replace('/app')
            return
        }

        if (response.code == 400 || response.code == 404) {
            setCaptionMessage(response.message);
        }

        setIsloading(false)

    }




    return (
        <form className="flex flex-col gap-6">
            <Input disabled={isLoading} value={email} setValue={setEmail} label="Email atau No. Hp" type="email" name="email" id="email" />
            <InputPassword disabled={isLoading} caption={captionMessage} value={password} setValue={setPassword} label="Password" type='password' name="password" id="password" />
            <Button isLoading={isLoading} disabled={isLoading} size="large" onClick={handleSubmit}>
                Masuk
            </Button>
        </form>
    )
}

export default FormLogin