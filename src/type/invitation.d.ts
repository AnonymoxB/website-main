export interface InvitationType {
    user_id: number;
    template_id: number;
    link_slug: string;
    title: string;
    description: string;
    lang: string;
    status: string;
}

export interface InvitationFullType {
    id: number;
    uuid: string;
    user_id: string;
    music_id: null | number;
    music_active: string;
    template_id: string;
    link_slug: string;
    title: string;
    description: string;
    event_date: null | string;
    event_time: null | string;
    time_zone: null | string;
    address: null | string;
    status: string;
    lang: string;
    detail: {
        invitation_id: string,
        home?: {
            couple_name: string,
            couple_date: string,
            image_cover: string
        },
        couple?: any,
        date?: any,
        story?: any,
        gallery?: any,
        gift?: any,
        thanks?: any
    }
    parent_id: null;
    deleted_at: null;
    created_at: string;
    updated_at: string;
    template: TemplateType;
    invitation_en: Omit<InvitationFullType, 'template', 'invitation_en'>;
}


interface TemplateType {
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
    template_category: {
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
}

