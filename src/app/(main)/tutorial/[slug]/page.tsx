import { getTutorials } from '@/service/api';
import { TutorialType } from '@/type/tutorial';
import Link from 'next/link';
import React from 'react'

async function page({ params }: { params: { slug: string } }) {
    const categories: TutorialType[] = await getTutorials();
    // const detailTutorial = categories.find((category) => category.slug === params.slug);


    // const detailTutorial = useCallback(() => {
    //     return categories.find((category) => category.slug === params.slug)
    // }, [params.slug, categories]);


    const detailTutorial = categories.find((category) => category.slug === params.slug);
    return (
        <div className='container container-xl mx-auto px-4'>
            <div className='flex flex-col lg:flex-row md:gap-4 mb-4'>
                <div className='order-2 lg:order-1 w-[302px] flex flex-col gap-2.5'>
                    <h6 className='text-neutral-900 text-xl font-bold'>Tutorial</h6>
                    <ul className='border-l-[1px] flex flex-col gap-2.5 pl-2 text-neutral-900'>
                        {categories.map((category) => (
                            <li key={category.id} >
                                <Link href={`/tutorial/${category.slug}`} className={`text-base ${params.slug === category.slug ? ' text-blue-500' : 'hover:text-blue-500'}`}>{category.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='order-1 lg:order-2 flex-1 flex flex-col gap-2.5 mb-10'>
                    <div style={{ backgroundImage: `url(${detailTutorial?.image})` }} className='w-full h-[387px] bg-no-repeat bg-center rounded-3xl flex flex-col justify-end'>
                        {/* <h1 className='text-xl md:text-4xl lg:text-5xl font-bold p-10 '>{detailTutorial?.title}</h1> */}
                    </div>
                    <h4 className='text-neutral-900 text-xl lg:text-3xl font-bold'>{detailTutorial?.title}</h4>
                    <p className='text-neutral-900 text-base lg:text-xl'>Januari 6, 2023</p>
                    <div className='w-full h-[387px] rounded-3xl'>
                        <iframe className='w-full h-full rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/IAaUeAI5DR8?si=t9PUvnOywtSNCHYf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page