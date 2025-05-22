import ExampleCountdown from "../theme/example/countdown"
import { ThemeNameType } from "../type/themeName"


export interface CountdownProps {
    coverImage: string,
    event1: {
        eventName: string;
        eventDate: string;
        eventTime: {
            start: string;
            end: string;
            timeZone: string
        };
        place: string;
        street: string;
        link: string
    }
    event2: {
        eventName: string;
        eventDate: string;
        eventTime: {
            start: string;
            end: string;
            timeZone: string;
        };
        place: string;
        street: string;
        link: string
    }
}

export interface SectionCountdownProps {
    themeName: ThemeNameType,
    data: CountdownProps
}

function SectionCountdown({ themeName, data }: SectionCountdownProps) {
    switch (themeName) {
        case 'example': return <ExampleCountdown data={data} />
        default: return <ExampleCountdown data={data} />
    }
}

export default SectionCountdown