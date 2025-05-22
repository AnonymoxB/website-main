'use client'
import { useState } from 'react'
import Input, { InputProps } from './Input';
import Button from '../button/Button';
import { EyeIcon } from '../../../public/assets/iconSVG';

function InputPassword(props: InputProps) {

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <Input  {...props} label={props.label} type={isShowPassword ? 'text' : 'password'} name="password" id="password" iconRight={<button type='button' onClick={() => setIsShowPassword(!isShowPassword)}><EyeIcon isShow={isShowPassword} /></button>} />
    )
}

export default InputPassword