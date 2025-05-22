import Image from "next/image";

export interface CardStoryProps {
    description: string;
    image: string;
    year: string;
}
function CardStory({ description, image, year }: CardStoryProps) {
    return (
        <div className="w-fit space-y-[28px]">
            <div className="text-gray-700 text-base font-normal font-Plus-Jakarta-Sans bg-white py-[11px] text-center">
                {description}
            </div>
            <div className="">
                <Image
                    src={image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-full aspect-square object-cover w-[200px]"
                />
            </div>
            <div className="text-emerald-50 text-lg font-normal text-center font-Plus-Jakarta-Sans">
                {year}
            </div>
        </div>
    )
}

export default CardStory