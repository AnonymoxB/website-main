import Image from "next/image"
import Logo from "../../public/assets/Logo"
import Button from "./button/Button"
import Copyright from "./Copyright"

function Footer() {
    return (
        <footer className="flex justify-center">
            <div className="container w-full gap-4 px-4 md:px-5 lg:px-20 pt-8 ">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex flex-col md:gap-4 gap-2 max-w-[274px]">
                        <Image
                            src='/assets/logo/logo-voow.png'
                            alt='voow'
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <p className="text-neutral-500 text-xs md:text-sm">Layanan undangan digital untuk memudahkan anda membuat undangan hanya dengan menggunakan smartphone saja.</p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h5 className="text-neutral-600 text-sm md:text-base font-semibold">Alamat</h5>
                        <p className="text-neutral-500 text-xs md:text-sm ">
                            Cengkareng Business City, Lot 12H Unit 18-19 <br />
                            Jl. Atang Sanjaya RT. 002/RW.005, Kamal, <br />
                            Kec. Benda, Tangerang, Banten 15125.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h5 className="text-neutral-600 text-sm md:text-base font-semibold">Navigasi</h5>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Beranda</a>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Tema</a>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Harga</a>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Tutorial</a>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Artikel</a>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h5 className="text-neutral-600 text-sm md:text-base font-semibold">Lainnya</h5>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Syarat dan Ketentuan</a>
                        <a className="text-neutral-500 text-xs md:text-sm hover:underline hover:text-blue-500">Kebijakan dan Privasi</a>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4">
                        <h5 className="text-neutral-600 text-sm md:text-base font-semibold">Hubungi Kami</h5>
                        <div className="flex gap-2">
                            <Button type="Tertiary" className="p-0">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 28.2C21.75 28.2 19.8 26.4 19.8 24C19.8 21.75 21.6 19.8 24 19.8C26.25 19.8 28.2 21.6 28.2 24C28.2 26.25 26.25 28.2 24 28.2Z" fill="#0167CC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M29.1 13.8H18.9C17.7 13.95 17.1 14.1 16.65 14.25C16.05 14.4 15.6 14.7 15.15 15.15C14.7939 15.5061 14.6257 15.8622 14.4223 16.2926C14.3687 16.406 14.3126 16.5249 14.25 16.65C14.2268 16.7196 14.2 16.7928 14.1713 16.8713C14.0144 17.3 13.8 17.8856 13.8 18.9V29.1C13.95 30.3 14.1 30.9 14.25 31.35C14.4 31.95 14.7 32.4 15.15 32.85C15.5061 33.2061 15.8622 33.3743 16.2926 33.5777C16.4061 33.6313 16.5248 33.6874 16.65 33.75C16.7196 33.7732 16.7928 33.8 16.8713 33.8287C17.3 33.9856 17.8856 34.2 18.9 34.2H29.1C30.3 34.05 30.9 33.9 31.35 33.75C31.95 33.6 32.4 33.3 32.85 32.85C33.2061 32.4939 33.3743 32.1378 33.5777 31.7074C33.6313 31.5939 33.6874 31.4752 33.75 31.35C33.7732 31.2804 33.8 31.2072 33.8287 31.1287C33.9856 30.7 34.2 30.1144 34.2 29.1V18.9C34.05 17.7 33.9 17.1 33.75 16.65C33.6 16.05 33.3 15.6 32.85 15.15C32.4939 14.7939 32.1378 14.6257 31.7074 14.4223C31.5941 14.3688 31.475 14.3125 31.35 14.25C31.2804 14.2268 31.2072 14.2 31.1287 14.1713C30.7 14.0144 30.1144 13.8 29.1 13.8ZM24 17.55C20.4 17.55 17.55 20.4 17.55 24C17.55 27.6 20.4 30.45 24 30.45C27.6 30.45 30.45 27.6 30.45 24C30.45 20.4 27.6 17.55 24 17.55ZM32.1 17.4C32.1 18.2284 31.4284 18.9 30.6 18.9C29.7716 18.9 29.1 18.2284 29.1 17.4C29.1 16.5716 29.7716 15.9 30.6 15.9C31.4284 15.9 32.1 16.5716 32.1 17.4Z" fill="#0167CC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM18.9 11.55H29.1C30.45 11.7 31.35 11.85 32.1 12.15C33 12.6 33.6 12.9 34.35 13.65C35.1 14.4 35.55 15.15 35.85 15.9C36.15 16.65 36.45 17.55 36.45 18.9V29.1C36.3 30.45 36.15 31.35 35.85 32.1C35.4 33 35.1 33.6 34.35 34.35C33.6 35.1 32.85 35.55 32.1 35.85C31.35 36.15 30.45 36.45 29.1 36.45H18.9C17.55 36.3 16.65 36.15 15.9 35.85C15 35.4 14.4 35.1 13.65 34.35C12.9 33.6 12.45 32.85 12.15 32.1C11.85 31.35 11.55 30.45 11.55 29.1V18.9C11.7 17.55 11.85 16.65 12.15 15.9C12.6 15 12.9 14.4 13.65 13.65C14.4 12.9 15.15 12.45 15.9 12.15C16.65 11.85 17.55 11.55 18.9 11.55Z" fill="#0167CC" />
                                </svg>
                            </Button>
                            <Button type="Tertiary" className="p-0">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.9 32.55C20.4 33.45 22.2 33.9 24 33.9C29.55 33.9 33.9 29.4 33.9 24.15C33.9 21.45 33 19.05 31.05 17.1C29.1 15.3 26.7 14.25 24 14.25C18.6 14.25 14.1 18.75 14.1 24.15C14.1 25.95 14.55 27.75 15.6 29.4L15.9 29.85L14.85 33.45L18.6 32.4L18.9 32.55ZM27.3 25.5C27.6 25.5 29.1 26.25 29.4 26.4C29.4467 26.4234 29.4934 26.4431 29.5396 26.4626C29.7898 26.5682 30.0234 26.6668 30.15 27.3C30.3 27.3 30.3 27.9 30 28.65C29.85 29.25 28.65 30 28.05 30C27.9484 30 27.851 30.0086 27.747 30.0178C27.2372 30.0629 26.568 30.1221 24.45 29.25C21.8213 28.1985 19.9988 25.6499 19.487 24.9342C19.4147 24.8331 19.3686 24.7686 19.35 24.75C19.3244 24.6989 19.2728 24.6174 19.2047 24.5099C18.8729 23.9859 18.15 22.8446 18.15 21.6C18.15 20.1 18.9 19.35 19.2 19.05C19.5 18.75 19.8 18.75 19.95 18.75H20.55C20.7 18.75 21 18.75 21.15 19.2C21.45 19.8 22.05 21.3 22.05 21.45C22.05 21.5 22.0667 21.55 22.0833 21.6C22.1167 21.7 22.15 21.8 22.05 21.9C21.975 21.975 21.9375 22.05 21.9 22.125C21.8625 22.2 21.825 22.275 21.75 22.35L21.3 22.8C21.15 22.95 21 23.1 21.15 23.4C21.3 23.7 21.9 24.75 22.8 25.5C23.8127 26.3861 24.6117 26.738 25.0168 26.9165C25.0917 26.9495 25.1532 26.9766 25.2 27C25.5 27 25.65 27 25.8 26.85C25.875 26.7 26.0625 26.475 26.25 26.25C26.4375 26.025 26.625 25.8 26.7 25.65C26.85 25.35 27 25.35 27.3 25.5Z" fill="#0167CC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24 12C27.15 12 30.15 13.2 32.4 15.45C34.65 17.7 36 20.7 36 23.85C36 30.45 30.6 35.85 24 35.85C22.05 35.85 20.1 35.25 18.3 34.35L12 36L13.65 30C12.6 28.2 12 26.1 12 24C12 17.4 17.4 12 24 12Z" fill="#0167CC" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer