export const formatter = new Intl.DateTimeFormat('eu', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
})

export const getGreenwichTime = date => formatter.format(date);
