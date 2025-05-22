import CardFoundLove from '../../components/example/card/CardFoundLove'
import { CoupleProps } from '../../sections/SectionCouple';

export default function ExampleCouple({ isEdit, data }: { isEdit?: boolean, data: CoupleProps }) {
  return (
    <>{!isEdit &&
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,256L360,192L720,256L1080,160L1440,192L1440,320L1080,320L720,320L360,320L0,320Z"
        ></path>
      </svg>
    }
      <div className="bg-white">
        <section
          className="bg-[url('/theme/example/images/Vector-3.png')] bg-cover bg-center -mt-0.5"
          id="couple"
        >
          <div className="bg-gradient-to-b from-white to-transparent py-7 px-1 lg:py-[64px] space-y-[24px] z-50">
            <h1
              className="text-emerald-800 text-5xl lg:text-[73.57px] font-normal font-beauty-salon-script text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              We Found Love
            </h1>
            <div
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="w-[827px] text-center text-emerald-900 text-base font-medium lg:text-2xl lg:font-normal font-Plus-Jakarta-Sans">
                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang.
                <br />( Ar-Rum 21 )
              </p>
            </div>
            <div
              className="flex justify-center lg:items-center gap-3 lg:gap-10"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <CardFoundLove
                name={data.couple1.name}
                bgImage={data.couple1.img}
                fullName={data.couple1.fullName}
                description={data.couple1.parent}
                whatsappNumber={data.couple1.whatsapp}
                instagramUser={data.couple1.instagram}
              />
              <div className="text-center text-emerald-900 text-5xl lg:text-[120px] font-normal font-beauty-salon-script py-14 lg:py-0">
                &
              </div>
              <CardFoundLove
                name={data.couple2.name}
                bgImage={data.couple2.img}
                fullName={data.couple2.fullName}
                description={data.couple2.parent}
                whatsappNumber=""
                instagramUser=""
              />
            </div>
          </div>
        </section>
      </div>
    </ >
  );
}
