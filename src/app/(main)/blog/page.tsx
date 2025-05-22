import Button from '@/components/button/Button'
import InputSearch from '@/components/input/InputSearch'
import React from 'react'
import { ArrowRightIcon } from '../../../../public/assets/iconSVG'
import CardBlog from '@/components/card/CardBlog'
import { GetBlogAll } from '@/service/api'
import Link from 'next/link'

async function page() {
    const topBlogs = await GetBlogAll({ limit: 3, offset: 0, sort_column: 'created_at', sort_order: 'desc' });
    const newBlogs = await GetBlogAll({ limit: 4, offset: 0, sort_column: 'created_at', sort_order: 'desc' });
    const allBlogs = await GetBlogAll({ limit: 4, offset: 0, sort_column: 'created_at', sort_order: 'desc' });

    return (
        <div className='container container-xl mx-auto px-4'>
            <section className='flex flex-col gap-2 items-center'>
                <h1 className="bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl text-center">VOOW Insight</h1>
                <p className="text-neutral-600 text-sm md:text-md lg:text-lg text-center">Insight dan informasi berharga hanya untuk anda</p>
                <InputSearch className='max-w-[628px] w-full my-4' placholder='Cari Artikel' />
            </section>
            {topBlogs.length > 3 && <section className='flex gap-6 mt-4 lg:mt-10'>
                <div style={{ backgroundImage: `url(${topBlogs[0].image})` }} className=' w-[845px] h-[600px] p-10 gap-2 hidden xl:flex flex-col justify-end bg-cover bg-no-repeat bg-center rounded-3xl'>
                    <div className="bg-neutral-900 p-4 rounded-3xl bg-opacity-40">
                        <p className='hidden md:block text-neutral-200 '>15 Juli 2023, oleh Shawn Mendes</p>
                        <h1 className='hidden md:block text-neutral-50 md:text-4xl lg:text-6xl font-bold'>{topBlogs[0].title}</h1>
                    </div>
                    <div className="flex">
                        <Link href={`/blog/${topBlogs[0].slug}`}>
                            <Button iconRight={<ArrowRightIcon />}>
                                Baca Artikel
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='flex-1 xl:h-[600px] flex xl:flex-col gap-6 w-full overflow-x-scroll no-scrollbar'>
                    <div style={{ backgroundImage: `url(${topBlogs[1].image})` }} className='min-w-[280px] w-full  flex-1 h-[200px] lg:h-[288px] bg-cover p-6 bg-no-repeat bg-center flex flex-col justify-end gap-y-1 gap-x-2 rounded-3xl'>
                        <div className="bg-blue-900 p-3 rounded-xl bg-opacity-40">
                            <p className='text-neutral-200 text-base'>15 Juli 2023, oleh Shawn Mendes</p>
                            <h1 className='text-neutral-50 text-2xl lg:text-xl font-bold'>{topBlogs[1].title}</h1>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${topBlogs[2].image})` }} className='min-w-[280px] w-full  flex-1 h-[200px] lg:h-[288px] bg-cover p-6 bg-no-repeat bg-center flex flex-col justify-end gap-1 rounded-3xl'>
                        <div className="bg-blue-900 p-3 rounded-xl bg-opacity-40">
                            <p className='text-neutral-200 text-base'>15 Juli 2023, oleh Shawn Mendes</p>
                            <h1 className='text-neutral-50 text-2xl lg:text-xl font-bold'>{topBlogs[2].title}</h1>
                        </div>
                    </div>
                </div>
            </section>}
            <section className='mt-10 flex flex-col gap-4 md:gap-6'>
                <h2 className='text-xl font-bold text-neutral-900'>Artikel Terbaru</h2>
                <div className='flex flex-col md:flex-row w-full no-scrollbar overflow-x-hidden gap-2 md:gap-6 justify-between'>
                    {newBlogs.map((blog) => (
                        <CardBlog key={blog.id} blog={blog} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Button className='bg-neutral-50 text-neutral-700'>Tampilkan lebih banyak</Button>
                </div>
            </section>
            <section className='mt-10 flex flex-col gap-4 md:gap-6 justify-center'>
                <h2 className='text-xl font-bold text-neutral-900'>Semua Artikel</h2>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 w-full no-scrollbar overflow-x-hidden md:gap-6 justify-between'>
                    {allBlogs.map((blog) => (
                        <CardBlog key={blog.id} blog={blog} />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Button className='bg-neutral-50 text-neutral-700'>Tampilkan lebih banyak</Button>
                </div>
            </section>
        </div >
    )
}

export default page