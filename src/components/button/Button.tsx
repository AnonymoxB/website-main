'use client'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import ReactLoading from "react-loading";


interface ButtonProps {
    children: React.ReactNode
    size?: "large" | "medium" | "small" | "xsmall"
    disabled?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    type?: 'Primary' | 'Secondary' | 'Tertiary' | 'Text'
    backgroundColor?: string,
    className?: string,
    onClick?: () => void,
    isSubmit?: boolean,
    position?: 'left' | 'right' | 'center',
    isLoading?: boolean
}
function Button({ children, size = 'medium', disabled, iconLeft, iconRight, type = 'Primary', backgroundColor = 'bg-blue-500', className, onClick, isSubmit, position, isLoading }: ButtonProps) {

    let stateClassName = ''
    let sizeClassName = ''
    let positionClassName = ''

    switch (type) {
        case 'Primary':
            stateClassName = `${backgroundColor} ${disabled ? 'opacity-50' : 'hover:bg-blue-700 hover:text-white hover:blue-900'}`;
            break;
        case 'Secondary':
            stateClassName = `${backgroundColor} border-[1px] ${disabled ? 'opacity-50' : 'hover:bg-blue-500 hover:border-blue-500 hover:text-white'} `;
            break;
        case 'Tertiary':
            stateClassName = `text-neutral-700 ${disabled ? 'opacity-50' : 'hover:text-[#00406B]'}`;
            break;
    }
    switch (size) {
        case 'xsmall':
            sizeClassName = 'p-1 rounded-md text-xs md:px-2 md:py-2 md:text-xs md:rounded-md';
            break;
        case 'small':
            sizeClassName = 'p-2 rounded-md text-xs md:px-4 md:py-3 md:text-sm md:rounded-lg';
            break;
        case 'medium':
            sizeClassName = 'px-4 py-3 rounded-lg text-sm';
            break;
        case 'large':
            sizeClassName = 'px-4 py-3 gap-1 rounded-xl text-base font-bold'
    }

    switch (position) {
        case 'left':
            positionClassName = 'justify-start text-left';
            break;
        case 'right':
            positionClassName = 'justify-end text-right';
            break;
        default:
            positionClassName = 'justify-center text-center';
            break;
    }


    return (
        <button type={isSubmit ? 'submit' : 'button'} onClick={onClick} disabled={disabled} className={twMerge(clsx('flex flex-row gap-1 text-neutral font-semibold items-center', stateClassName, sizeClassName, positionClassName, className))}>
            {iconLeft}
            {isLoading ? <ReactLoading type={'bars'} color={type === 'Primary' ? "#fff" : '#0181FF'} height={20} width={20} /> : children}
            {iconRight}
        </button>
    )
}

export default Button