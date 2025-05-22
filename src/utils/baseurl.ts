export function BASE_URL(endpoint: string = ''): string {
    return `${process.env.BASE_URL}/${endpoint}`
}