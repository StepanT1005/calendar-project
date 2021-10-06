export function getTitle() {
    const titles = document.querySelector('.title');
    return titles.textContent
}

export function getDescription() {
    const description = document.querySelector('.about');
    return description.innerText    
}

export function getPlans() {
    const plans = document.querySelector('.plans');
    return plans.innerHTML
}

export function getGoal() {
    const goal = document.querySelector('.goal');
    return goal.outerHTML;
}

