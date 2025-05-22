import CardMakeAWish from '../../components/example/card/CardMakeAWish'
import CardRsvp from '../../components/example/card/CardRsvp'
export default function ExampleRsvp() {
    return (
        <div className="bg-white">
            <section
                className="px-[24px] py-[32px] lg:py-[64px] lg:px-[136px] space-y-[64px] font-Plus-Jakarta-Sans"
                id="rsvp"
            >
                <div className="text-center space-y-[32px]">
                    <h1
                        className="text-emerald-800 text-3xl lg:text-5xl font-bold "
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        RSVP
                    </h1>
                    <div className="flex justify-center">
                        <p
                            className="lg:w-[900px] text-center text-gray-800 text-sm lg:text-2xl font-normal "
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
                            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
                            restu kepada kedua mempelai.
                        </p>
                    </div>
                    <CardRsvp />
                </div>
                <div className="text-center space-y-[32px]">
                    <h1
                        className="text-emerald-800 text-3xl lg:text-5xl font-bold "
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        Make A Wish
                    </h1>
                    <div className="flex justify-center">
                        <p
                            className="lg:w-[900px] text-center text-gray-800 text-sm lg:text-2xl font-normal "
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            Suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak berkenan
                            hadir dan memberikan restu kepada kami
                        </p>
                    </div>
                </div>
                <CardMakeAWish />
            </section>
        </div>
    );
}
