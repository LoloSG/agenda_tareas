const listaTasks = document.querySelector('#lista')
const inputAddTarea = document.querySelector('#enterTask');
const inputPrioridad = document.querySelector('#priorityInput');
const selectPrioridad = document.querySelector('#priorityFilter');


// Pintar Tareas
const printAllTasks = function (pTaskList) {
    listaTasks.innerHTML = "";
    for (let task of pTaskList) {
        printOneTask(task);
    }
}


const printOneTask = function (pTask) {

    let li = document.createElement('li');
    li.classList.add(`${pTask.prioridad}`);
    let button = document.createElement('button');

    li.innerHTML = pTask.titulo
    let contentButton = document.createTextNode(`X`);

    button.appendChild(contentButton);
    li.appendChild(button)


    button.classList.add('delete');
    button.dataset.id = pTask.id;
    button.addEventListener('click', deleteTask);

    listaTasks.appendChild(li)
}