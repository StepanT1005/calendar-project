"use strict"
const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

export const renderTasks = tasksList => {
  listElem.innerHTML = ''
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.numberElem = index;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

export const addTask = () => {
const inputElem = document.querySelector('.task-input');
if (inputElem.value.replace(/\s/g,"") == "") return;
tasks.push({ 'text': inputElem.value, 'done': false});
renderTasks(tasks)
inputElem.value = ''
}

const buttonElem = document.querySelector('.create-task-btn');
buttonElem.addEventListener('click', addTask)

const checkBoxElem = document.querySelectorAll('.list__item-checkbox');
export function setCheckboxValue(event) {
    const targetCheckbox = event.target.dataset.numberElem
    if(!targetCheckbox) return;
    tasks[targetCheckbox].done = !tasks[targetCheckbox].done;
    renderTasks(tasks);

}
listElem.addEventListener('click', setCheckboxValue)


