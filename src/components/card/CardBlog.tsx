import { Blog } from '@/type/blog'
import Link from 'next/link'
import React from 'react'

function CardBlog({ blog }: { blog: Blog }) {
    return (
        <Link href={`blog/${blog.slug}`}>
            <article className='rounded-xl bg-neutral-50 w-full lg:max-w-[293px]'>
                <div className='h-[227px]'>
                    <img
                        src={blog.image}
                        alt={blog.title}
                        width={100}
                        height={100}
                        className='object-cover w-full h-full rounded-t-xl'
                    />
                </div>
                <header className='flex flex-col p-4 gap-4'>
                    <p className='text-neutral-400 text-2xs'>{blog.created_at}, oleh {blog.user.name}</p>
                    <h5 className='line-clamp-2	text-neutral-900 text-base font-semibold'>
                        {blog.title}
                    </h5>
                </header>
            </article>
        </Link>
    )
}

export default CardBlog