let listaTareas = [];

const mostrarTareas = () => {
    console.log("Tareas actuales:", listaTareas);
};

const agregarTarea = (evento) => {
    evento.preventDefault(); 
    const inputTarea = document.getElementById('taskInput');
    const nuevaTarea = inputTarea.value.trim(); 

    if (nuevaTarea) { 
        listaTareas.push(nuevaTarea); 
        inputTarea.value = ''; 
        mostrarTareas(); 
        actualizarListaHTML();
    }
};


const eliminarTarea = (indice) => {
    listaTareas.splice(indice, 1);
    mostrarTareas(); 
    actualizarListaHTML(); 
};

const actualizarListaHTML = () => {
    const listaHTML = document.getElementById('taskList');
    listaHTML.innerHTML = ''; 

    listaTareas.forEach((tarea, indice) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = tarea;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '   Eliminar tarea :(';
        botonEliminar.onclick = () => eliminarTarea(indice); 

        itemLista.appendChild(botonEliminar); 
        listaHTML.appendChild(itemLista); 
    });
};

document.getElementById('taskForm').addEventListener('submit', agregarTarea);
