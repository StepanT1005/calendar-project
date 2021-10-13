import shmoment from './shmoment.js';

// вернет дату понедельника той недели, в которую входит переданный день
export const getStartOfWeek = date => {
    const dateCopy = new Date(date);
    const dayOfWeek = dateCopy.getDay();
    const difference =
        dayOfWeek === 0
            ? -6 // for Sunday
            : 1 - dayOfWeek;
    const monday = new Date(dateCopy.setDate(date.getDate() + difference));
    return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

// вернет массив из 7 дней, начиная и переданной даты
export const generateWeekRange = startDate => {
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const base = new Date(startDate);
        result.push(new Date(base.setDate(base.getDate() + i)));
    }
    return result;
};

// вернет объект даты по переданной дате '2000-01-01' и времени '21:00'
export const getDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    const withHours = new Date(new Date(date).setHours(Number(hours)));
    const withMinutes = new Date(
        new Date(withHours).setMinutes(Number(minutes)),
    );
    return withMinutes;
};

const monthsNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

// вернет месяц и год для недели, в которой находится переданный день
export const getDisplayedMonth = date => {
    const weekStart = getStartOfWeek(date);
    const weekEnd = shmoment(date).add('days', 6).result();
    const startMonth = weekStart.getMonth();
    const startYear = weekStart.getFullYear();
    const endMonth = weekEnd.getMonth();
    const endYear = weekEnd.getFullYear();
    const isSameMonth = startMonth === endMonth;
    if (isSameMonth) {
        return `${monthsNames[startMonth]} ${startYear}`;
    }
    const isSameYear = startYear === endYear;
    return isSameYear
        ? `${monthsNames[startMonth]} - ${monthsNames[endMonth]} ${startYear}`
        : `${monthsNames[startMonth]} ${startYear} - ${monthsNames[endMonth]} ${endYear}`;
};