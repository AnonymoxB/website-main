import React from 'react'
import { ThemeNameType } from '../type/themeName'
import ExampleFooter from '../theme/example/footer'

export interface footer {
    imageCover: string,
    coupleName: string,
    family: string
}


export interface SectionFooterProps {
    themeName: ThemeNameType,
    data: footer
}
function SectionFooter({ themeName, data }: SectionFooterProps) {
    switch (themeName) {
        case 'example': return <ExampleFooter data={data} />
        default: return <ExampleFooter data={data} />
    }
}

export default SectionFooter