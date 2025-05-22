export type ThemeCategoryType = {
    id: number;
    title: string;
    slug: string;
    description: string;
    lang: string;
    parent_id: number | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
};

export type ThemeType = {
    id: number;
    template_category_id: string;
    title: string;
    image: string;
    type: string;
    status: string;
    lang: string;
    parent_id: number | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    template_category: ThemeCategoryType;
};