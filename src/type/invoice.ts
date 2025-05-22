
export type StatusInvoiceType = 'Pending' | 'Success' | 'Failed' | 'Expired'

export type InvoiceType = {
    id: number;
    user_id: string;
    package_id: string;
    invoice: string;
    name: string;
    email: string;
    phone_number: string;
    price: string;
    admin_price: string;
    price_total: string;
    invoice_url: string;
    expiry_date: string;
    status: StatusInvoiceType;
    rawJson: string;
    created_at: string;
    updated_at: string;
};