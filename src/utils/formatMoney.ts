export function formatMoney(amount: number | string): string {
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    const formattedAmount = amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return formattedAmount;
}

