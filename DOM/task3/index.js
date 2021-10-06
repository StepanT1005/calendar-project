export function getItemsList() {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList
}

export function getItemsArray() {
    const nodeList = document.querySelectorAll('.tool');
    const elementsArray = Array.from(nodeList);
    console.dir(elementsArray);
    console.log(elementsArray);
    console.log(nodeList);
}

