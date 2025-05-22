import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import Script from 'next/script'

function layout({ children }: { children: React.ReactNode }) {
  return (

    <div>
      <TopBar />
      <main className='w-full h-full mt-16 md:mt-20'>
        {children}
      </main>
      <Navbar />
      <Footer />
      <Script src='./assets/js/script.js' />
    </div>
  )
}

export default layout