import TopBar from "@/components/TopBar"
import Image from "next/image"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FormRegister from "./FormRegister";
import Copyright from "@/components/Copyright";
import TopBarLogin from "@/components/nav/TopBarLogin";

function page() {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen md:overflow-hidden">
            <div className="w-full lg:w-5/5 min-h-[266px]  md:h-screen bg-gradient-to-br from-gradient-blue-start to-gradient-blue-end overflow-hidden p-4 pt-20 md:pt-0 md:p-10 lg:p-20">
                <Image
                    src="/assets/image/bg-2.png"
                    alt="bg"
                    width={1240}
                    height={2014}
                    className="absolute top-0 left-0 h-screen w-full object-cover z-0"
                    priority
                />
                <div className="relative">
                    <TopBar isWhite className="bg-transparent relative md:hidden" />
                </div>
                <div className="bg-white backdrop-blur bg-opacity-20 p-4 lg:px-10 lg:py-20 rounded-3xl gap-2 min-h-[170px] flex flex-col justify-center">
                    <h1 className="text-mob-h1-bold text-neutral-50 md:text-tab-h1-bold lg:text-web-h1-bold">VOOW: Sederhana, Cepat,  dan Efektif</h1>
                    <p className="text-mob-small-regular md:text-tab-body-lead-regular lg:text-web-body-lead-regular ">Solusi undangan digital terbaik. Dengan fitur-fitur canggih, Anda dapat membuat undangan yang menarik dengan mudah, serta mengirimkannya secara instan kepada tamu Anda.</p>
                </div>
            </div>
            <div className="z-10 w-full text-neutral-700 flex flex-col items-center">
                <TopBarLogin />
                <main className="overflow-y-scroll flex w-full justify-center">
                    <div className="max-w-[519px] flex flex-col gap-10 m-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-mob-h1-bold md:text-3xl">Daftar Sekarang</h1>
                            <p className="text-mob-paragraft-reguler md:text-lg">Masukkan data diri Anda untuk mendaftar dan mulai rasakan kemudahan membuat undangan digital bersama kami</p>
                        </div>
                        <FormRegister />
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-2 items-center">
                                <hr className="flex-1" />
                                <span className="text-neutral-400 text-xs">Atau login dengan</span>
                                <hr className="flex-1" />
                            </div>
                            <div className="flex justify-center gap-2">
                                <button className="bg-blue-500 hover:bg-blue-700 p-4 rounded">
                                    <Image
                                        src="/assets/logo/facebook-logo.png"
                                        alt="login with facebook"
                                        width={100}
                                        height={100}
                                        className="w-[24px] h-[24px]"
                                        priority
                                    />
                                </button>
                                <button className="bg-neutral-50 hover:bg-neutral-200 p-4 rounded">
                                    <Image
                                        src="/assets/logo/google-logo.png"
                                        alt="login with facebook"
                                        width={100}
                                        height={100}
                                        className="w-[24px] h-[24px]"
                                        priority
                                    />
                                </button>
                            </div>
                        </div>
                        <span className="text-center text-sm md:text-base leading-6 pb-5">Sudah punya akun?  <Link href="/login" className="font-bold text-blue-500">Masuk</Link></span>
                        <Copyright />
                    </div>
                </main>
            </div>
            <Navbar />
        </div>
    )
}

export default page