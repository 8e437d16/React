export function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatter = new Intl.DateTimeFormat('ko-KR', options);
    return formatter.format(new Date());
}