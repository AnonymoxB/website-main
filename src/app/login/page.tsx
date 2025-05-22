import TopBar from "@/components/TopBar"
import Image from "next/image"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FormLogin from "./FormLogin";
import Copyright from "@/components/Copyright";
import TopBarLogin from "@/components/nav/TopBarLogin";
import AuthWithProvider from "./AuthWithProvider";

function page() {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen md:overflow-hidden">
            <div className="w-full lg:w-5/5 min-h-[266px]  md:h-screen bg-gradient-to-br from-gradient-blue-start to-gradient-blue-end overflow-hidden  px-4 pt-20 md:pt-10 md:p-10 lg:p-20">
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
                    <h1 className="text-mob-h1-bold text-neutral-50 md:text-tab-h1-bold lg:text-web-h1-bold">Kami  <br /> Merindukan Anda</h1>
                    <p className="text-mob-small-regular md:text-tab-body-lead-regular lg:text-web-body-lead-regular ">Kami senang Anda kembali dan merindukan kehadiran Anda di sini.</p>
                </div>
            </div>
            <div className="z-10 w-full text-neutral-700 flex flex-col items-center">
                <TopBarLogin />
                <main className="overflow-y-scroll flex w-full justify-center">
                    <div className="max-w-[519px] flex flex-col gap-10 m-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-mob-h1-bold md:text-3xl">Selamat Datang Kembali</h1>
                            <p className="text-mob-paragraft-reguler md:text-lg">Nikmati kembali kemudahan membuat undangan digital bersama VOOW</p>
                        </div>
                        <FormLogin />
                        <AuthWithProvider type="login" />
                        <span className="text-center text-sm md:text-base leading-6 pb-5">Belum punya akun?  <Link href="/register" className="font-bold text-blue-500">Daftar</Link></span>
                        <Copyright />
                    </div>
                </main>
            </div>
            <Navbar />
        </div>
    )
}

export default page