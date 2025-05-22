
import ExampleShareLove from '../theme/example/sharelove'
import { ThemeNameType } from '../type/themeName'

export interface ShareLove {
    namaBank: string
    atasNama: string,
    nomorRekening: string
}

export interface SectionShareLove {
    themeName: ThemeNameType,
    data: ShareLove[]
}

function SectionShareLove({ themeName, data }: SectionShareLove) {
    switch (themeName) {
        case 'example': return <ExampleShareLove data={data} />
        default: return <ExampleShareLove data={data} />
    }
}

export default SectionShareLove