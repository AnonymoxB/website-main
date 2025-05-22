import { Interface } from "readline";
import GroupCardCountdown from "../group/GroupCardCountdown";
import { CountdownProps } from "@/app/(invitation)/sections/SectionCoutdown";


function CardCountdown(props: CountdownProps) {
  return (
    <div
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div style={{ backgroundImage: `url('${props?.coverImage}')` }} className="lg:w-[900px] bg-[url('')] bg-cover bg-center lg:bg-[position:0px_-130px] rounded-t-[80px] lg:rounded-t-[150px]">
        <div className="h-[473px] bg-emerald-900 bg-opacity-80 rounded-t-[80px] px-[35px] flex flex-col justify-end py-[88px] lg:py-[71px] lg:rounded-t-[150px]">
          <h1 className="font-beauty-salon-script text-gray-50 text-[32px] lg:text-5xl font-normal">
            Where & when
          </h1>
          <h2 className="text-gray-50 text-2xl lg:text-5xl font-bold font-Plus-Jakarta-Sans">
            Wedding Day
          </h2>
          <span className="text-center text-gray-50 text-sm font-semibold lg:text-xl lg:font-medium font-Plus-Jakarta-Sans">
            Gravitation is not responsible for people falling in love.
          </span>
        </div>
      </div>
      <div className="lg:w-[900px] bg-white py-[24px] lg:py-[103px] flex justify-center gap-[72px] rounded-b-[80px] flex-col lg:flex-row lg:rounded-b-[150px]">
        <GroupCardCountdown
          title={props.event1.eventName}
          date={props.event1.eventDate}
          time={`${props.event1.eventTime.start} - ${props.event1.eventTime.end} ${props.event1.eventTime.timeZone}`}
          location={{
            place: props.event1.place,
            street: props.event1.street,
            link: props.event1.link
          }}
        />
        <GroupCardCountdown
          title={props.event2.eventName}
          date={props.event2.eventDate}
          time={`${props.event2.eventTime.start} - ${props.event2.eventTime.end} ${props.event2.eventTime.timeZone}`}
          location={{
            place: props.event2.place,
            street: props.event2.street,
            link: props.event2.link
          }}
        />
      </div>
    </div>
  );
}

export default CardCountdown;