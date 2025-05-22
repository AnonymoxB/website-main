'use client'
import CardTutorial from '@/components/card/CardTutorial'
import { getTutorials, getTutorialsByCategory } from '@/service/api'
import { TutorialCategoryType, TutorialType } from '@/type/tutorial'
import FilterTutorial from './FilterTutorial';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function SectionTutorial({ categories }: { categories: TutorialCategoryType[] }) {
    const searchParams = useSearchParams();
    const categoryUrl = searchParams.get('category');

    const [Tutorials, setTutorials] = useState<Array<TutorialType>>([]);

    useEffect(() => {
        fetchTutorials();
    }, [searchParams])

    async function fetchTutorials() {
        const res = categoryUrl === null ? await getTutorials() : await getTutorialsByCategory(categoryUrl);
        setTutorials(res);
    }

    return (
        <div>
            <Suspense>
                <FilterTutorial categories={categories} />
            </Suspense>
            <section className='grid xl:grid-cols-4 lg:grid-cols-3 gap-2 mt-10'>
                {!!Tutorials.length ?
                    Tutorials.map((tutorial) => (
                        <CardTutorial key={tutorial.slug} tutorial={tutorial} />
                    ))
                    :
                    <>
                        <div className='text-neutral-900 flex justify-center w-full'>Belum ada tutorial</div>
                        <hr />
                    </>
                }
            </section>
        </div>
    )
}

export default SectionTutorial