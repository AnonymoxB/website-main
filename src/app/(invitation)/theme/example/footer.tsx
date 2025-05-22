import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { footer } from "../../sections/Footer";

export default function ExampleFooter({ data }: { data: footer }) {
    return (
        <footer style={{ backgroundImage: `url('${data?.imageCover}')` }} className="lg:min-h-screen bg-center lg:bg--top bg-cover">
            <div className="bg-gray-700 bg-opacity-30 py-[76px]">
                <div className="lg:h-screen flex flex-col justify-center items-center gap-[12px] pt-[173px]">
                    <h1 className="text-center text-white text-xl font-medium lg:text-4xl lg:font-normal font-Plus-Jakarta-Sans">
                        THANKS YOU
                    </h1>
                    <h2 className="text-center text-5xl font-normal text-white lg:text-[109.63px] font-beauty-salon-script">
                        {data.coupleName}
                    </h2>
                    <h3 className="text-center text-base font-medium text-white lg:text-4xl lg:font-normal font-Plus-Jakarta-Sans">
                        Keluarga Besar dari <br /> {data.family}
                    </h3>
                </div>
                <div className="flex flex-col justify-center items-center gap-[12px] mt-12 lg:mt-0">
                    <div className="text-center text-gray-50 text-xs lg:text-lg font-normal leading-7">
                        Digital Invitation by Voow
                    </div>
                    <img
                        src="/theme/example/svg/main-logo.svg"
                        alt=""
                        className="w-[104.21px] h-[31.30px] lg:w-[208.42px] lg:h-[62.59px]"
                    />
                    <div className="flex justify-center">
                        <a href="#" className="rounded-full p-2 lg:p-3 ">
                            <img
                                src="/theme/example/images/instagram.png"
                                alt=""
                                className="w-6 lg:w-[48px] hover:scale-110 duration-300"
                            />
                        </a>
                        <a href="#" className=" w-fit p-2 lg:p-3 rounded-full">
                            <img
                                src="/theme/example/images/whatsapp.png"
                                alt=""
                                className="w-6 lg:w-[48px] hover:scale-110 duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
