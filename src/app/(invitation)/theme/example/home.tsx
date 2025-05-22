import Image from "next/image"
import { twMerge } from "tailwind-merge";
import { HomeProps } from "../../sections/SectionHome";
import moment from "moment";

export default function HeroSection({ isEdit, data }: { isEdit?: boolean, data: HomeProps }) {

    return (
        <div style={{ backgroundImage: `url('${data?.image_cover_preview}')` }} className={twMerge("animate__animated animate__fadeInUp min-h-screen font-Plus-Jakarta-Sans bg-cover bg-center lg:bg-top", isEdit ? 'z-0 block' : '-z-10 sticky top-0 ')}>
            <div className="bg-gray-600 bg-opacity-30">
                <section
                    className="h-screen min-w-full flex flex-col justify-center items-center"
                    id="hero"
                >
                    <div className="h-[178.37px] flex-col justify-start items-center inline-flex mt-60 space-y-2 lg:space-y-7">
                        <div className="text-gray-50 text-xs font-semibold lg:text-xl lg:font-normal">
                            The Wedding of
                        </div>
                        <div className="text-gray-50 text-4xl lg:text-[80px] font-bold">
                            {data?.couple_name}
                        </div>
                        <div className="text-gray-50 text-sm lg:text-xl font-normal">
                            {moment(data?.couple_date).format('DD-MM-YYYY')}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
