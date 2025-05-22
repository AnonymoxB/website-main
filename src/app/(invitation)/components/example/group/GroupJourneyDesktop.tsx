import React from "react";
import CardStory, { CardStoryProps } from "../card/CardStory";

export default function GroupJourneyDesktop({ listStory }: { listStory: CardStoryProps[] }) {
  return (
    <div
      className="flex justify-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="lg:w-[900px] lg:flex gap-[80px] justify-center hidden">
        {listStory.map((story, index) => (
          <CardStory
            key={index + 'story'}
            description={story.description}
            image={story.image}
            year={story.year}
          />
        ))}
      </div>
    </div>
  );
}
