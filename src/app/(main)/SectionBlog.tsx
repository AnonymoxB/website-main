import Button from '@/components/button/Button'
import CardBlog from '@/components/card/CardBlog'
import { GetBlogAll } from '@/service/api';
import { Blog } from '@/type/blog';

async function SectionBlog() {
    const Blog: Blog[] = await GetBlogAll({ limit: 4 });

    return (
        <section className='w-full flex flex-col gap-4 px-4 container mx-auto overflow-x-hidden lg:px-20 py-6 md:py-10 lg:py-16'>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between '>
                    <h1 className='text-xl md:text-3xl font-semibold text-blue-500'>Blog</h1>
                    <a className='text-xs text-blue-500 flex hover:underline'>
                        Selengkapnya
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1758_1961" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="17">
                                <rect y="0.459473" width="16" height="16" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1758_1961)">
                                <path d="M11.0846 8.95949H3.5C3.35812 8.95949 3.23932 8.91163 3.1436 8.81591C3.04787 8.72019 3 8.60139 3 8.45951C3 8.31763 3.04787 8.19883 3.1436 8.10311C3.23932 8.00739 3.35812 7.95953 3.5 7.95953H11.0846L7.63845 4.51336C7.53931 4.41421 7.49038 4.29819 7.49167 4.16529C7.49294 4.03238 7.54529 3.91422 7.64872 3.81081C7.75213 3.71423 7.86922 3.66423 7.99998 3.66081C8.13075 3.65739 8.24784 3.70739 8.35125 3.81081L12.5782 8.03773C12.6406 8.10011 12.6846 8.16593 12.7102 8.23516C12.7359 8.30438 12.7487 8.37916 12.7487 8.45951C12.7487 8.53985 12.7359 8.61464 12.7102 8.68386C12.6846 8.75309 12.6406 8.8189 12.5782 8.88129L8.35125 13.1082C8.25895 13.2005 8.14464 13.2477 8.00832 13.2499C7.87199 13.252 7.75213 13.2048 7.64872 13.1082C7.54529 13.0048 7.49358 12.886 7.49358 12.7518C7.49358 12.6176 7.54529 12.4988 7.64872 12.3954L11.0846 8.95949Z" fill="#0181FF" />
                            </g>
                        </svg>
                    </a>
                </div>
                <p className='text-neutral-600 text-sm md:text-base'>
                    Dapatkan insight dan informasi berharga di Blog kami
                </p>
            </div>
            <div className='flex flex-col md:flex-row w-full no-scrollbar gap-2 md:gap-6 justify-between'>
                {Blog.map((blog) => (
                    <CardBlog key={blog.id} blog={blog} />
                ))}
            </div>
            <Button className='md:hidden' size='small' type='Secondary' backgroundColor='bg-neutral-50 text-neutral-700'>Tampilkan lebih banyak</Button>
        </section>
    )
}

export default SectionBlog