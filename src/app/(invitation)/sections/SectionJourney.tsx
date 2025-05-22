import React from 'react'
import ExampleJourney from '../theme/example/journey'
import { ThemeNameType } from '../type/themeName'
import { CardStoryProps } from '../components/example/card/CardStory'

export interface SectionJourneyProps {
    themeName: ThemeNameType,
    data: CardStoryProps[]
}
function SectionJourney({ themeName, data }: SectionJourneyProps) {
    switch (themeName) {
        case 'example': return <ExampleJourney data={data} />
        default: return <ExampleJourney data={data} />
    }
}

export default SectionJourney