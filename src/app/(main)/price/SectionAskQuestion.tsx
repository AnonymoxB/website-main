import Slider from '@/components/Slider';
import CardAskQuestion from '@/components/card/CardAskQuestion'
import { getFAQ } from '@/service/api';
// mport React from 'react'

async function SectionAskQuestion() {
    const FAQs = await getFAQ();
    return (
        <div className='bg-slate-200 w-full flex justify-center'>
            <section className='container flex flex-col w-full gap-y-6 py-6 md:py-10 lg:py-16 px-4 lg:px-20'>
                <div className='flex flex-col'>
                    <h2 className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl'>FAQs</h2>
                    <p className='text-neutral-600 text-sm md:text-md lg:text-lg'>Temukan Jawaban untuk Pertanyaan Umum</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <Slider>
                        <div className='flex flex-col gap-y-4 gap-x-6 md:flex-row mb-10 md:mb-0'>
                            <CardAskQuestion faq={FAQs[0]} />
                            <CardAskQuestion faq={FAQs[0]} />
                            <CardAskQuestion faq={FAQs[0]} />
                        </div>
                        <div className='flex flex-col gap-y-4 gap-x-6 md:flex-row mb-10 md:mb-0'>
                            <CardAskQuestion faq={FAQs[0]} />
                            <CardAskQuestion faq={FAQs[0]} />
                            <CardAskQuestion faq={FAQs[0]} />
                        </div>
                        <div className='flex flex-col gap-y-4 gap-x-6 md:flex-row mb-10 md:mb-0'>
                            <CardAskQuestion faq={FAQs[0]} />
                            <CardAskQuestion faq={FAQs[0]} />
                            <CardAskQuestion faq={FAQs[0]} />
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default SectionAskQuestion