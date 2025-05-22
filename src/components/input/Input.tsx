import clsx from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string,
    setValue: (value: string) => void,
    iconLeft?: JSX.Element,
    iconRight?: JSX.Element,
    label?: string,
    labelStyle?: string,
    isOptional?: boolean,
    caption?: string,
    inputClassName?:string
}
function Input(props: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {props.label && <label htmlFor={props.name} className={twMerge(clsx("text-xs leading-4 font-bold", props.labelStyle))}>{props.label} {props.isOptional ? <span className="text-mob-tiny-reguler text-neutral-400">*optional</span> : <span className="text-mob-tiny-reguler text-red-500">*</span>}</label>}
            <div className={`${props.inputClassName} flex bg-neutral-50 p-3 rounded-lg text-mob-extrasmall-regular gap-2 `}>
                {props.iconLeft}
                <input value={props.value} disabled={props.disabled} placeholder={props.placeholder} type={props.type} name={props.name} id={props.id} onChange={(e) => props.setValue(e.target.value)} className={`text-neutral-700 bg-transparent w-full text-base outline-0`}   />
                {props.iconRight}
            </div>
            {!!props.caption && <span className="text-mob-tiny-reguler text-red-400">{props.caption}</span>}
        </div>
    )
}

export default Input