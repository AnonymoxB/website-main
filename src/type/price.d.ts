type DescriptionItem = {
    icon: string;
    description: string;
};

export type slugPriceType = 'gratis' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'sapphire';
export type PriceType = {
    id: number;
    name: string;
    name_desc: string;
    icon: string;
    slug: slugPriceType
    description: DescriptionItem[];
    price: string;
    promo_price: string;
    admin_price: string;
    created_at: string;
    updated_at: string;
};

export type BuyPackageType = {
    user_id: number;
    package_id: number;
    invoice: string;
    name: string;
    email: string;
    phone_number: string;
    price: string;
    admin_price: string;
    price_total: number;
    invoice_url: string;
    expiry_date: {
        date: string;
        timezone_type: number;
        timezone: string;
    };
    status: string;
    rawJson: string;
    updated_at: string;
    created_at: string;
    id: number;
}