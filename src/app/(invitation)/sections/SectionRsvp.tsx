
import ExampleHome from '../theme/example/home'
import ExampleRsvp from '../theme/example/rsvp'
import { ThemeNameType } from '../type/themeName'

export interface RsvpProps {
    couple_name: string,
    couple_date: string,
    image_cover: string
    image_cover_preview?: string,
}

export interface SectionRsvpProps {
    themeName: ThemeNameType,
}

function SectionRsvp({ themeName }: SectionRsvpProps) {
    switch (themeName) {
        case 'example': return <ExampleRsvp />
        default: return <ExampleRsvp />
    }
}

export default SectionRsvp