import GroupJourneyMobile from '../../components/example/group/GroupJourneyMobile'
import GroupJourneyDesktop from '../../components/example/group/GroupJourneyDesktop'
import { CardStoryProps } from '../../components/example/card/CardStory'
function ExampleJourney({ data }: { data: CardStoryProps[] }) {
    return (
        <section
            className="bg-emerald-700 py-[63px] px-[24px] lg:px-[206px] space-y-[59px]"
            id="date"
        >
            <div className="text-center">
                <h1
                    className="text-gray-50 text-4xl lg:text-5xl font-normal font-beauty-salon-script"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    The Journey
                </h1>
                <h2
                    className="text-gray-50 text-2xl lg:text-5xl font-bold font-Plus-Jakarta-Sans"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    Our Love Story
                </h2>
            </div>
            <div className="">
                <GroupJourneyMobile listStory={data} />
                <GroupJourneyDesktop listStory={data} />
            </div>
        </section>
    )
}

export default ExampleJourney