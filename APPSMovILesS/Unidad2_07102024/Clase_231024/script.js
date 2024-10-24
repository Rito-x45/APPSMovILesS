// Inicializa un array llamado 'task' con cuatro tareas.
let task = ["compar", "estudiar", "limpiar la casa"];

// Imprime en la consola la lista de tareas actual.
console.log("lista de tareas", task);

// Agrega una nueva tarea "ir a la escuela" al final del array 'task'.
task.push("ir a la escuela");

// Elimina la tarea en la posición 1 del array 'task' (que es "estudiar").
task.splice(1, 1);

// Agrega otra tarea "ir a casa" al final del array 'task'.
task.push("ir a casa");

//******************************Usando ForEach******************************//

// Inicializa otro array llamado 'tasks' con cuatro tareas.
let tasks = ["compar", "estudiar", "limpiar la casa", "no se"];

// Itera sobre cada tarea en el array 'tasks' usando forEach.
tasks.forEach((task, index) => {
    // Imprime en la consola el índice y el nombre de cada tarea.
    console.log("Tarea " + index + ": " + task);
});