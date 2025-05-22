import ExampleNav from "../../theme/example/nav"
import { ThemeNameType } from "../../type/themeName"

function Nav({ themeName }: { themeName: ThemeNameType }) {
    switch (themeName) {
        case 'example': return <ExampleNav />
        default: return <ExampleNav />
    }
}

export default Nav