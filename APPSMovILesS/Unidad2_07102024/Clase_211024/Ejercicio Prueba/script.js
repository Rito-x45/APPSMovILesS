// Creamos un array para guardar las tareas
let listaTareas = [];

// Función para imprimir la lista de tareas en la consola
const mostrarTareas = () => {
    console.log("Tareas actuales:", listaTareas);
};

// Función para añadir una tarea
const agregarTarea = (evento) => {
    evento.preventDefault(); // Evitamos el envío del formulario

    const inputTarea = document.getElementById('taskInput');
    const nuevaTarea = inputTarea.value.trim(); // Obtenemos y limpiamos el input

    if (nuevaTarea) { // Verificamos que no esté vacío
        listaTareas.push(nuevaTarea); // Agregamos la tarea al array
        inputTarea.value = ''; // Limpiamos el input
        mostrarTareas(); // Mostramos la lista en consola
        actualizarListaHTML(); // Actualizamos la vista en HTML
    }
};

// Función para eliminar una tarea
const eliminarTarea = (indice) => {
    listaTareas.splice(indice, 1); // Eliminamos la tarea por índice
    mostrarTareas(); // Mostramos la lista actualizada en consola
    actualizarListaHTML(); // Actualizamos la vista en HTML
};

// Función para actualizar la lista de tareas en el HTML
const actualizarListaHTML = () => {
    const listaHTML = document.getElementById('taskList');
    listaHTML.innerHTML = ''; // Limpiamos la lista existente

    // Añadimos cada tarea al HTML
    listaTareas.forEach((tarea, indice) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = tarea;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '   Eliminar tarea :(';
        botonEliminar.onclick = () => eliminarTarea(indice); // Asociamos el botón a la función de eliminación

        itemLista.appendChild(botonEliminar); // Añadimos el botón al item
        listaHTML.appendChild(itemLista); // Añadimos el item a la lista
    });
};

// Asociamos el evento submit del formulario a la función agregarTarea
document.getElementById('taskForm').addEventListener('submit', agregarTarea);
