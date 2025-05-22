import React from 'react'
import { CancelIcon, CheckCircleIcon, DiamondBlueIcon, DiamondGoldIcon, DiamondIcon, DiamondPlatinumIcon, DiamondPurpleIcon, DiamondSilverIcon } from '../../../public/assets/iconSVG'
import Button from '../button/Button'
import { PriceType } from '@/type/price'
import { formatMoney } from '@/utils/formatMoney'
import ButtonSelectPackage from '../button/ButtonSelectPackage'

function CardProductPrice(props: PriceType & { isActive: boolean, onClick: () => void }) {
    function IconDiamond() {
        switch (props.slug) {
            case 'gratis': return <DiamondIcon />
            case 'silver': return <DiamondSilverIcon />
            case 'gold': return <DiamondGoldIcon />
            case 'platinum': return <DiamondPlatinumIcon />
            case 'diamond': return <DiamondBlueIcon />
            case 'sapphire': return <DiamondPurpleIcon />

        }
    }
    return (
        <div onClick={props.onClick} className={`cursor-pointer	flex flex-col  bg-white drop-shadow rounded-2xl gap-6 p-6 w-full border-[1px] min-w-[290px] ${props.isActive ? 'border-blue-500' : 'hover:border-blue-500'} mb-10`}>
            <div className='h-[143px] flex flex-col justify-between'>
                <header className='flex flex-col gap-1'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-1 items-center'>
                            <IconDiamond />
                            <h6 className='text-xl text-neutral-900'>{props.name}</h6>
                        </div>
                        <span className='text-orange-500 bg-orange-100 px-1.5 py-0.5 rounded text-xs'>
                            Populer
                        </span>
                    </div>
                    <p className='text-neutral-600 text-xs'>{props.name_desc}</p>
                </header>
                <div>
                    {props.price === '0' ? <h4 className='text-neutral-400 text-sm'>Gratis!!</h4> : <del className='text-neutral-400 text-sm'>Rp. {formatMoney(props.price)}</del>}
                    <h4 className='text-3xl font-bold text-blue-500'>{props.price === '0' ? 'Gratis' : `Rp${formatMoney(props.price)}`}</h4>
                </div>
            </div>
            <hr />
            <ul className='flex flex-col gap-2'>
                {props.description.map((desc) => (
                    <li key={desc.description} className='flex items-center gap-2 text-neutral-500 text-base'>
                        {desc.icon === 'checklist' ? <CheckCircleIcon /> : <CancelIcon />}
                        {desc.description}
                    </li>
                ))}
            </ul>
            <hr />
            <ButtonSelectPackage id={props.id} />
        </div>
    )
}

export default CardProductPrice