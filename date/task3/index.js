// const getDiff = (startDate, endDate) => {
// const diff = Math.abs(startDate - endDate);
// let secundes = a.getSeconds()
// let minutes = a.getMinutes();
// let hours = a.getHours() - 3;
// let sumAll = secundes * 1000 + minutes * 60000 + hours * 3600000;
// console.log(sumAll)
// console.log(diff)
// let day = 0;
// const milisecundsInDay = 1000 * 3600 * 24;

// (diff - milisecundsInDay) < 0? undefined: day = ((diff / milisecundsInDay));
// console.log(`${day}d ${hours}h ${minutes}m ${secundes}s`)

// return diff;
// // const firstDate = new Date(startDate).getTime();
// // return new Date(firstDate)
// }

// // const date1 = new Date(2021, 10, 9, 14, 10, 30);
// // const date2 = new Date(2021, 10, 16, 14, 10, 30);
// // console.log(date1, date2);
// // const date1 = new Date(2020, 11, 9, 11, 19, 46);
// // const date2 = new Date(2021, 10, 10, 15, 12, 0);
// const date1 = new Date(2020, 11, 9, 11, 19, 46);
// const date2 = new Date(2021, 10, 10, 15, 12, 0);
// console.log(getDiff(date1, date2))
// // console.log(getDiff(date1))


export const getDiff = (startDate, endDate) => {
    const diff = (startDate - endDate) > 0? (startDate - endDate):(endDate - startDate);
    const a = new Date(diff)
    let secundes = a.getSeconds()
    let minutes = a.getMinutes();
    let hours = a.getHours() - 3;
    let day = 0;
    const milisecundsInDay = 1000 * 3600 * 24;    
    (diff - milisecundsInDay) < 0? undefined: day = (Math.trunc(diff / milisecundsInDay));
    return `${day}d ${hours}h ${minutes}m ${secundes}s`
    };

    const date1 = new Date(2020, 11, 9, 11, 19, 46);
const date2 = new Date(2021, 10, 10, 15, 12, 0);
console.log(getDiff(date1, date2))