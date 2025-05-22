import Image from "next/image";
import { AglimpsProps } from "../../sections/SectionAglimps";


export default function ExampleAglimps({ data }: { data: AglimpsProps }) {
    return (
        <div className="bg-white">
            <section
                className="bg-[url('/theme/example/images/Vector-3.png')] bg-cover bg-center"
                id="galery"
            >
                <div className="bg-gradient-to-b from-white to-transparent py-[63px] px-[34px] lg:px-[136px]">
                    <div className="space-y-[24px]">
                        <div className="text-center">
                            <h1
                                className="text-emerald-800 text-4xl lg:text-5xl font-normal font-beauty-salon-script"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                A Glimpse of
                            </h1>
                            <h2
                                className="text-emerald-800 text-2xl lg:text-5xl font-bold"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                Our Moments
                            </h2>
                        </div>
                        <div
                            className="flex justify-center"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <p className="lg:w-[900px] text-center text-emerald-700 text-sm lg:text-2xl font-normal font-Plus-Jakarta-Sans">
                                {data?.quotes}
                            </p>
                        </div>
                        <div
                            className="flex justify-center"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="lg:w-[900px] grid lg:grid-cols-3 grid-cols-2 justify-items-center gap-[12px] lg:gap-7">
                                {data?.imagesUrl.map((image, index) => (
                                    <div key={image + index} className="rounded-md">
                                        <img src={image} alt={`${image}-${index}`} width={1000} height={1000} className="aspect-square object-cover object-center" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
