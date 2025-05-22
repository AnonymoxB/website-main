import ExampleOpen from "../theme/example/open"

function SectionOpen({ themeName, data }: any) {
    switch (themeName) {
        case 'example': return <ExampleOpen {...data} />
        default: return <ExampleOpen {...data} />
    }
}

export default SectionOpen