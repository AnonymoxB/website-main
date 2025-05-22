
import ExampleHome from '../theme/example/home'
import { ThemeNameType } from '../type/themeName'

export interface HomeProps {
    couple_name: string,
    couple_date: string,
    image_cover_preview: string,
}

export interface SectionHomeProps {
    themeName: ThemeNameType,
    data: HomeProps,
    isEdit?: boolean
}

function SectionHome({ themeName, data, isEdit }: SectionHomeProps) {
    switch (themeName) {
        case 'example': return <ExampleHome isEdit={isEdit} data={data} />
        default: return <ExampleHome isEdit={isEdit} data={data} />
    }
}

export default SectionHome