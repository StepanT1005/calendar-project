'use strict'
function createLogger(){
let records = [];

const warn = (message) => {
    records.push({
        message,
        type: 'warn',
        dateTime: new Date(),
        });
    }; 

const error = (message) => {
        records.push({
            message,
            type: 'error',
            dateTime: new Date(),
        });
    };
const log = (message) => {
        records.push({
            message,
            type: 'log',
            dateTime: new Date(),
        });
    };  
const getRecords = (typeRecords) => {
    records.sort((a, b) => b.dateTime - a.dateTime)
    if (typeRecords === undefined) {
        return records;
    }
    else if(typeRecords === 'warn' || typeRecords === 'error'|| typeRecords === 'log') {
        // const arrayRecord = [];
        // records.forEach(item => {if (item.type == typeRecords) arrayRecord.push(item) });
        // console.log(arrayRecord);
        return records.reduce((arr, item) => {
             if (item.type == typeRecords) {
                 arr.push(item);
            } return arr;
        }, []);
    }
}
return {
    warn,
    getRecords,
    error,
    log,
    };
};

let logger1 = createLogger();

// logger1.warn('Blablabla');
// logger1.log('BGASdASDA');
// logger1.error('ERRRRRRRRRRRRRRROR');
console.log(logger1.getRecords());    
// function a () {
//     logger1.warn('User try to restricted page');
// }
// function b () {
//     console.log(logger1.getRecords())
// }
// setTimeout(a, 2000);
// setTimeout(b, 5000)