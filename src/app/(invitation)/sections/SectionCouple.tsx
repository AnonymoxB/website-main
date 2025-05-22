import ExampleCouple from "../theme/example/couple";
import { ThemeNameType } from "../type/themeName";

type couple = {
    name: string,
    fullName: string,
    img: string,
    instagram?: string,
    whatsapp?: string,
    parent: string
}

export interface CoupleProps {
    couple1: couple,
    couple2: couple,
}

export interface SectionCoupleProps {
    themeName: ThemeNameType,
    data: CoupleProps,
    isEdit?: boolean,
}

function SectionCouple({ themeName, data, isEdit }: SectionCoupleProps) {
    switch (themeName) {
        case 'example': return <ExampleCouple data={data} isEdit={isEdit} />
        default: return <ExampleCouple data={data} isEdit={isEdit} />
    }
}

export default SectionCouple