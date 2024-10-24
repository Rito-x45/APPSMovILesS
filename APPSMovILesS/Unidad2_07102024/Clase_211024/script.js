// Funcion Flecha
//1-******************************************//
function mifuncion (a,b){
    return a+b;
}
//******************************************//

//2-******************************************//
console.log (mifuncion(2,3))

//Estructura de funcion Flecha
let salu2 = () => {};

//3-******************************************//
let saludo = (nombre) => {
    return "saludos " + nombre;
}

console.log (saludo("yo"))
//******************************************//

//4-******************************************//
let saludar = nombre => "saludos " + nombre;

console.log (saludar("fua un pavo ranger"))
//******************************************//

//5-*****************Pasar Parametros*****************//
let suma =(a,b) => a+b;

console.log(suma(5,8))
//******************************************//

//6-*****************Crear un Ojeto Funcion Flecha*****************//
let obj = () => ({nombre: "Bonafont", edad:26})

//Llamamos al objeto y accedemos a la propiedad
    //let persona = obj().nombre;
console.log (obj().nombre);
//******************************************//

//7-*****************arreglos*****************//
let arrFunc = () => [1,2,3,4,5];

//accediendo a todo el array
console.log (arrFunc());

//accediendo al arreglo
console.log (arrFunc()[4]);
//******************************************//