import { User } from "./user";

export type TutorialType = {
    id: number;
    user_id: string;
    tutorial_category_id: string;
    title: string;
    image: string;
    slug: string;
    content: string;
    link_youtube: string;
    status: string;
    lang: string;
    parent_id: null | number;
    deleted_at: null | string;
    created_at: null | string;
    updated_at: null | string;
    user: User;
    tutorial_category: TutorialCategoryType[]

}

export type TutorialCategoryType = {
    id: number;
    title: string;
    slug: string;
    description: string;
    lang: string;
    parent_id: null | number;
    deleted_at: null | string;
    created_at: string;
    updated_at: string;
};