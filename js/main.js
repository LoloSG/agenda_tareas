const listaTasks = document.querySelector('#lista')
const inputAddTarea = document.querySelector('#enterTask');
const inputPrioridad = document.querySelector('#priorityInput');
const selectPrioridad = document.querySelector('#priorityFilter');


// Pintar Tareas
const printAllTasks = function (pTareasList) {
    listaTasks.innerHTML = "";
    for (let task of pTareasList) {
        printOneTask(task);
    }
}




const printOneTask = function (pTarea) {

    let li = document.createElement('li');
    li.classList.add(`${pTarea.prioridad}`);
    let button = document.createElement('button');
    li.innerHTML = `<div>${pTarea.titulo}</div>`

    li.innerHTML = pTarea.titulo
    let contentButton = document.createTextNode(`X`);

    button.appendChild(contentButton);
    li.appendChild(button);




    button.classList.add('delete');
    button.dataset.id = pTarea.id;
    button.addEventListener('click', deleteTask);

    listaTasks.appendChild(li)
}



//----- Añadir tareas nuevas desde el formulario


let idTask = listaTareas.length

const btnForm = document.querySelector('#btn');

btnForm.addEventListener('click', getDataForm)

function getDataForm(event) {
    event.preventDefault();

    const title = inputAddTarea.value;
    const priority = inputPrioridad.value;


    if (title != "" && priority != "") {
        const newTask = {
            id: ++idTask,
            titulo: title,
            prioridad: priority,
        };
        saveTask(newTask);
    } else {
        alert('Completa todos los campos');
    }
}

function saveTask(pTarea) {
    listaTareas.push(pTarea);
    printOneTask(pTarea);
    console.log(listaTareas);
}



// Funciones para borrar tareas de la lista de tareas

function deleteTask(event) {

    let li = event.target.parentNode;
    li.parentNode.removeChild(li)

    let id = parseInt(event.target.dataset.id);
    let position = listaTareas.findIndex(task => task.id === id);

    listaTareas.splice(position, 1)
    console.log(listaTareas);

}

printAllTasks(listaTareas)



// Filtrado de tareas por prioridad



selectPrioridad.addEventListener('change', getPriority);

function getPriority(event) {
    let priority = event.target.value;
    if (priority != "") {
        let listaTasksFiltrada = filterByPriority(priority, listaTareas);
        printAllTasks(listaTasksFiltrada)
    } else {
        printAllTasks(listaTareas)
    }
}

function filterByPriority(pPriority, pTareasList) {
    const listaFiltrada = pTareasList.filter(task => task.prioridad == pPriority);

    return listaFiltrada;
}
