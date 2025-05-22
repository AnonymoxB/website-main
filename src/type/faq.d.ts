
export type FAQType = {
    id: number,
    question: string,
    answer: string,
    lang: string,
    status: string,
    parent_id: number | null,
    deleted_at: string | null,
    created_at: string,
    updated_at: string
}