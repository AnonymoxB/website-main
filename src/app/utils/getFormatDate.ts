import moment from 'moment';
export function getFormatDate(date: string, format: string = 'dddd, DD MMMM YYYY') {
    return moment(date).format(format);
}

export function getFormatDateWithDay(date: string, format: string = 'HH:mm') {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = days[moment(date).day()];
    const month = months[moment(date).month()];
    return `${day}, ${moment(date).date()} ${month} ${moment(date).year()}`
}