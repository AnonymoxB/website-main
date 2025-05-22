import { FAQType } from '@/type/faq'
import React from 'react'

function CardAskQuestion({ faq }: { faq: FAQType }) {
    return (
        <div className='flex flex-col p-4 gap-2 bg-neutral-50'>
            <h6 className='text-sm text-neutral-900'>{faq?.question}</h6>
            <p className='text-xs text-neutral-600 leading-[150%]'>{faq?.answer}</p>
        </div>
    )
}

export default CardAskQuestion