// const timer = {
//     secondsPassed: 0,
//     minsPassed: 0,
//     addNull: 0,
//     position: null,
//     startTimer() {
// this.position = setInterval(() => {this.getTime();
//     this.secondsPassed += 1;
// if (this.secondsPassed > 59) {this.minsPassed += 1; this.secondsPassed = 0}}, 1000)
//     },
//     stopTimer() {
//         clearInterval(this.position);
//     },
//     getTime() { if (this.secondsPassed < 10) {
//         console.log(`${this.minsPassed}:${this.addNull}${this.secondsPassed}`)
//     } else {
//         console.log(`${this.minsPassed}:${this.secondsPassed}`)
//     };
//     },
//     resetTimer() {
//         this.minsPassed = 0;
//         this.secondsPassed = 0;
//     }
    
// }


// let start = timer.startTimer;
// let getTime = timer.getTime


const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    addNull: 0,
    position: null,
    startTimer() {
this.position = setInterval(() => {this.getTime();
    this.secondsPassed += 1;
if (this.secondsPassed > 59) {this.minsPassed += 1; this.secondsPassed = 0}}, 1000)
    },
    stopTimer() {
        clearInterval(this.position);
    },
    getTime() { if (this.secondsPassed < 10) {
        return `${this.minsPassed}:${this.addNull}${this.secondsPassed}`;
    } else {
        return `${this.minsPassed}:${this.secondsPassed}`;
    };
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }
    
}
