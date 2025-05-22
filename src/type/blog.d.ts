

export interface BlogCategory {
    id: number;
    title: string;
    slug: string;
    description: string;
    lang: string;
    parent_id: number | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Blog {
    id: number;
    user_id: string;
    blog_category_id: string;
    title: string;
    image: string;
    slug: string;
    content: string;
    status: string;
    lang: string;
    parent_id: number | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
    user: User;
    blog_category: BlogCategory;
}