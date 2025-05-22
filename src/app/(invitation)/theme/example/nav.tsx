
export default function ExampleNav() {
  return (
    <nav
      className={`bg-[#047857] flex h-[75px] flex-row justify-center gap-[28px] rounded-t-3xl fixed w-full bottom-0 z-10 lg:hidden animate__animated animate__fadeInUp`}
      id="navbar"
    >
      <a
        href="#couple"
        className="flex flex-col justify-center items-center gap-1"
      >
        <img
          src="/svg/couple.svg"
          alt=""
          className="scale-110 hover:scale-125 duration-300"
        />
        <span className="text-gray-50 text-[10px] font-normal leading-[15px]">
          Couple
        </span>
      </a>
      <a
        href="#date"
        className="flex flex-col justify-center items-center gap-1"
      >
        <img
          src="/svg/date.svg"
          alt=""
          className="scale-110 hover:scale-125 duration-300"
        />
        <span className="text-gray-50 text-[10px] font-normal leading-[15px]">
          Date
        </span>
      </a>
      <a
        href="#galery"
        className="flex flex-col justify-center items-center gap-1"
      >
        <img
          src="/svg/galery.svg"
          alt=""
          className="scale-110 hover:scale-125 duration-300"
        />
        <span className="text-gray-50 text-[10px] font-normal leading-[15px]">
          Galery
        </span>
      </a>
      <a
        href="#gift"
        className="flex flex-col justify-center items-center gap-1"
      >
        <img
          src="/svg/gift.svg"
          alt=""
          className="scale-110 hover:scale-125 duration-300"
        />
        <span className="text-gray-50 text-[10px] font-normal leading-[15px]">
          Gift
        </span>
      </a>
      <a
        href="#rsvp"
        className="flex flex-col justify-center items-center gap-1"
      >
        <img
          src="/svg/rsvp.svg"
          alt=""
          className="scale-110 hover:scale-125 duration-300"
        />
        <span className="text-gray-50 text-[10px] font-normal leading-[15px]">
          Rsvp
        </span>
      </a>
    </nav>
  );
}
