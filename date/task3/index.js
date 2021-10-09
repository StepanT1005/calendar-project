 const getDiff = (startDate, endDate) => {
    const diff = (Math.abs(startDate - endDate)) / 1000;
    const min = 60;
    const h = min * 60;
    const d = h * 24;
    const day = Math.floor(diff / d);
    const hours = Math.floor((diff % d) / h);
    const minutes = Math.floor((diff % h) / min)
    const secundes = Math.floor(diff % 60);
    return `${day}d ${hours}h ${minutes}m ${secundes}s`
    };