import React from 'react'
import ExampleJourney from '../theme/example/journey'
import { ThemeNameType } from '../type/themeName'
import ExampleAglimps from '../theme/example/aglimps'

export interface AglimpsProps {
    quotes: string;
    imagesUrl: string[];
}


export interface SectionAglimpsProps {
    themeName: ThemeNameType,
    data: AglimpsProps,
    isEdit?: boolean
}


function SectionAglimps({ themeName, data, isEdit }: SectionAglimpsProps) {
    switch (themeName) {
        case 'example': return <ExampleAglimps data={data} />
        default: return <ExampleAglimps data={data} />
    }
}

export default SectionAglimps

