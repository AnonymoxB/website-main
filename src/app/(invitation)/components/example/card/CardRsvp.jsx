export default function CardRsvp() {
  return (
    <div className="flex justify-center">
      <div
        className="lg:w-[900px] w-full bg-emerald-800 px-[24px] lg:px-[128px] py-[64px] rounded-[50px] lg:rounded-[100px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <form className="space-y-[24px]">
          <div className="flex flex-col gap-[24px] ">
            <label
              htmlFor="nama"
              className="text-gray-50 text-xl font-medium lg:text-2xl lg:font-normal font-Plus-Jakarta-Sans text-left"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="px-[18px] py-2 rounded-lg"
            />
          </div>
          <div className="space-y-[24px]">
            <div className="text-gray-50 text-xl font-medium lg:text-2xl lg:font-normal font-Plus-Jakarta-Sans text-left">
              Kehadiran
            </div>
            <div className="flex gap-[10px]">
              <input type="radio" id="hadir" name="hadir" />
              <label
                htmlFor="html"
                className="text-center text-gray-50 text-xs font-bold font-Plus-Jakarta-Sans"
              >
                Hadir
              </label>
            </div>
            <div className="flex gap-[10px]">
              <input type="radio" id="tidakHadir" name="tidakHadir" />
              <label
                htmlFor="css"
                className="text-center text-gray-50 text-xs font-bold font-Plus-Jakarta-Sans"
              >
                Tidak Hadir
              </label>
            </div>
          </div>
          <div className="flex justify-start">
            <button className="px-[20px] lg:py-[12px] py-1 text-center text-emerald-50 text-[10px] lg:text-sm font-semibold font-Plus-Jakarta-Sans border-2 border-emerald-50 lg:rounded-[10px] rounded-md hover:bg-emerald-700 duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
