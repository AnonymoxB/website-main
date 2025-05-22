'use client'
import { useCountdown } from '@/hooks/useCountdown';
import CardCountdown from '../../components/example/card/CardCountdown'
import { CountdownProps } from '../../sections/SectionCoutdown';
function ExampleCountdown({ data }: { data: CountdownProps }) {
    const [days, hours, minutes, seconds] = useCountdown(data.event1.eventDate + ' ' + data.event1.eventTime.start);
    return (
        <section className=" bg-[#98B5AE] text-center py-[64px] px-[20px] lg:px-[136px] space-y-[64px]">
            <div className="space-y-[32px] lg:space-y-[73px]">
                <div className="space-y-5 ">
                    <h1
                        className="text-gray-50 text-4xl lg:text-5xl font-normal font-beauty-salon-script"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        Countdown to
                    </h1>
                    <h2
                        className="text-gray-50 text-2xl lg:text-5xl font-bold font-Plus-Jakarta-Sans"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        Our Happy day
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div
                        className="lg:w-[900px] w-full flex justify-between px-5 lg:px-10"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div className="lg:space-y-6 space-y-2">
                            <div className="text-gray-50  text-4xl lg:text-[80px] font-bold font-Plus-Jakarta-Sans">
                                {days}
                            </div>
                            <div className="text-gray-200 text-base font-semibold lg:text-lg lg:font-normal font-Plus-Jakarta-Sans leading-7">
                                Days
                            </div>
                        </div>
                        <div className="lg:space-y-6 space-y-2">
                            <div className="text-gray-50 text-4xl lg:text-[80px] font-bold font-Plus-Jakarta-Sans">
                                {hours}
                            </div>
                            <div className="text-gray-200 text-base font-semibold lg:text-lg lg:font-normal font-Plus-Jakarta-Sans leading-7">
                                Hours
                            </div>
                        </div>
                        <div className="lg:space-y-6 space-y-2">
                            <div className="text-gray-50 text-4xl lg:text-[80px] font-bold font-Plus-Jakarta-Sans">
                                {minutes}
                            </div>
                            <div className="text-center text-gray-200 text-base font-semibold lg:text-lg lg:font-normal font-Plus-Jakarta-Sans leading-7">
                                Minutes
                            </div>
                        </div>
                        <div className="lg:space-y-6 space-y-2">
                            <div className="text-gray-50 text-4xl lg:text-[80px] font-bold font-Plus-Jakarta-Sans">
                                {seconds}
                            </div>
                            <div className="text-center text-gray-200 text-base font-semibold lg:text-lg lg:font-normal font-Plus-Jakarta-Sans leading-7">
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        className="w-[827px] text-center text-sm font-normal text-gray-50 lg:text-xl lg:font-medium font-Plus-Jakarta-Sans"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        Waktu berganti begitu cepat, dalam penantian kami yang penuh doa,
                        kami berharap kehadiran dan doa restu seluruh keluarga, sahabat dan
                        saudara terkasih, untuk menjadi saksi ikrar janji suci kami di hari
                        bahagia
                    </div>
                </div>
            </div>
            <CardCountdown {...data} />
        </section>
    );
}

export default ExampleCountdown