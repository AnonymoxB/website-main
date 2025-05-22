import CardPay from '../../components/example/card/CardPay'
import { ShareLove } from '../../sections/SectionShareLove';

export default function ExampleShareLove({ data }: { data: ShareLove[] }) {
    return (
        <section
            className="px-[24px] py-[32px] lg:py-[63px] lg:px-[136px] bg-emerald-900 space-y-[24px] lg:space-y-[59px]"
            id="gift"
        >
            <h1
                className="text-gray-50 text-2xl lg:text-5xl font-bold font-Plus-Jakarta-Sans text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                Shared Love
            </h1>
            <div className="flex justify-center">
                <p
                    className="lg:w-[900px] text-center text-gray-50 text-sm lg:text-2xl font-normal font-Plus-Jakarta-Sans"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    Bagi yang berkeinginan memberikan kado pernikahan atau tanda kasih,
                    kami juga menyediakan wedding gift pada link di bawah ini.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[59px]">
                {data?.map((item, index) => (
                    <CardPay key={index} data={item} />
                ))}
            </div>
        </section>
    );
}
