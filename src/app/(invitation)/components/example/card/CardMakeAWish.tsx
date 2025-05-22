import CardChildMakeAWish from "./CardChildMakeAWish";

export default function CardMakeAWish() {
  return (
    <div className="flex justify-center">
      <div
        className="lg:w-[900px] bg-emerald-800 px-[24px] py-[32px] lg:p-[128px] rounded-[50px] lg:rounded-[100px] space-y-[64px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <form className="flex flex-col gap-[24px]">
          <input
            type="text"
            placeholder="Nama"
            className="py-2 px-[18px] rounded-lg"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={7}
            placeholder="Your Wish"
            className="py-2 px-[18px] rounded-lg"
          ></textarea>
          <div className="flex justify-center lg:justify-start">
            <button className="px-[20px] lg:py-[12px] py-1 text-[10px] font-medium text-center text-emerald-50 lg:text-sm lg:font-semibold font-Plus-Jakarta-Sans border-2 border-emerald-50 rounded-md lg:rounded-[10px] hover:bg-emerald-700 duration-300">
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-items-center gap-y-6">
          <CardChildMakeAWish
            name="Zulkifli"
            svgSource="/svg/correct.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              doloribus optio autem a reprehenderit beatae soluta debitis alias
              obcaecati eos ipsum laborum, excepturi possimus sit vel, quisquam
              officia accusantium aspernatur."
            date="06 Oktober 2020"
          />
          <CardChildMakeAWish
            name="radi"
            svgSource="/svg/wrong.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              doloribus optio autem a reprehenderit beatae soluta debitis alias
              obcaecati eos ipsum laborum, excepturi possimus sit vel, quisquam
              officia."
            date="06 Oktober 2020"
          />
          <CardChildMakeAWish
            name="Zulkifli"
            svgSource="/svg/correct.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        doloribus optio autem a reprehenderit beatae soluta debitis alias
        obcaecati eos ipsum laborum, excepturi possimus sit vel, quisquam
        officia accusantium aspernatur."
            date="06 Oktober 2020"
          />
          <CardChildMakeAWish
            name="radi"
            svgSource="/svg/wrong.svg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        doloribus optio autem a reprehenderit beatae soluta debitis alias
        obcaecati eos ipsum laborum, excepturi possimus sit vel, quisquam
        officia."
            date="06 Oktober 2020"
          />
        </div>
      </div>
    </div>
  );
}
