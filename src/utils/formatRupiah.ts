//make function getFormat rupiah return string
export function formatRupiah(amount: number | string, prefix = 'Rp '): string {
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    const formattedAmount = amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return prefix + formattedAmount;
}