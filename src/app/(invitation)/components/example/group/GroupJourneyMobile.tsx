import { useId } from "react";
import CardStory, { CardStoryProps } from "../card/CardStory";

export default function GroupJourneyMobile({ listStory }: { listStory: CardStoryProps[] }) {
  return (
    <div className="lg:hidden" data-aos="fade-up" data-aos-duration="1500">
      <div className="carousel w-full">

        {listStory.map((story, index) => (
          <div
            key={Math.random() * 10000}
            id="item1" className="carousel-item w-full flex justify-center">
            <CardStory
              description={story.description}
              image={story.image}
              year={story.year}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="w-2 h-2 bg-white rounded-full"></a>
        <a href="#item2" className="w-2 h-2 bg-white rounded-full"></a>
        <a href="#item3" className="w-2 h-2 bg-white rounded-full"></a>
        <a href="#item4" className="w-2 h-2 bg-white rounded-full"></a>
      </div>
    </div>
  );
}
