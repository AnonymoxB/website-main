import SectionAskQuestion from '../price/SectionAskQuestion'
import { getCategoryTutorials } from '@/service/api'
import SectionTutorial from './SectionTutorial'
import { TutorialCategoryType } from '@/type/tutorial'

async function page() {

  const categories: TutorialCategoryType[] = await getCategoryTutorials();
  return (
    <div className='container mx-auto px-4'>
      <section className='flex flex-col gap-10 mt-[130px]  w-full'>
        <div className='flex flex-col gap-2'>
          <h1 className="bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl">Pahami VOOW <br /> Dengan Lebih Mudah</h1>
          <p className="text-neutral-600 text-sm md:text-md lg:text-lg">Insight dan informasi berharga hanya untuk anda</p>
        </div>
      </section>
      <SectionTutorial categories={categories} />
      <SectionAskQuestion />
    </div>
  )
}

export default page