import SectionAskQuestion from './SectionAskQuestion'
import SectionProductPrice from './SectionProductPrice'
import SectionBusinessPackageProduct from './SectionBusinessPackageProduct'
import { getPricePackage } from '@/service/api'

async function page() {

  const prices = await getPricePackage();

  return (
    <div className='flex flex-col items-center container mx-auto px-4'>
      <SectionProductPrice prices={prices} />
      {/* <SectionBusinessPackageProduct /> */}
      <section className='flex flex-col md:flex-row w-full items-center gap-x-20 gap-y-2 mb-5'>
        <div className='order-2 md:order-1 h-[333px] w-full lg:h-[495px]'>
          <img
            src='/assets/image/bg-3.png'
            width={100}
            height={100}
            alt='bg'
            className='h-full w-full object-contain'
          />
        </div>
        <div className='order-1 md:order-2 w-full text-neutral-200 text-center'>
          <h2 className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl text-center w-full'>Fitur Lengkap, Kualitas Hemat</h2>
          <p className='text-neutral-600 text-sm md:text-md lg:text-lg'>Solusi yang ideal untuk mencapai hasil optimal dengan budget yang terjaga. Temukan pilihan terbaik untuk keperluan Anda</p>
        </div>
      </section>
      {/* <SectionAskQuestion/> */}
    </div>
  )
}

export default page