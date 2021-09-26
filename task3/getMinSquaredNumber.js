export default(arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let min = Math.min(...arr.map(num => Math.abs(num)))
    return min*=min;
}

// const numArray = [-777, 3, -2, 6, 45, 20]
// console.log(getMinSquaredNumber(numArray))