//FUNCIONES

/*function hello(){
    console.log("Hola JS");
    console.log("Hola HTML");
    console.log("Hola CSS");
}

hello();
hello();
hello();
hello(); */

//retorno de una funcion

/*function hello(){
   return "Hola Js"
}

const result = hello();
hello();

console.log(result); */

/*function hello(){
    return []
 }
 
console.log(hello());*/

//retorna el valor del objeto
/*function hello(){
    return {
        nombre: "Raul"
    }
}

console.log(hello());*/

//Funcion retorna otra funcion
/*
function hello(){
    return function (){
        return "Hola JS"
    }
}

console.log(hello()());
*/

//========== USO DE PARAMETROS EN FUNCIONES =================//

/* 
function helloconJS(name){
    return  "Hola " + name
}

console.log(helloconJS("Tadeo"))
console.log(helloconJS("Eddy"))
console.log(helloconJS("Roberto"))
*/

//pasar mas de un parametro

/*
function helloconJS(x,y){
    return x/y
}

console.log(helloconJS(10,20))
console.log(helloconJS(10,80))
*/

//control de errores en parametros

/*
function helloconJS(x,y){
    if(y == undefined){
        y = 0 
}

    return x+y
}

console.log(helloconJS(10))
*/

/*
function helloconJS(x,y=0){
    return x+y
}

console.log(helloconJS(10))
*/


// ================= OBJETOS ================= //

const user = {
    nombre : "Fernando",
    apellidoM : "Perez",
    edad: 16,
    edoCivil : "Voy a morir solo",
    domicilio : {
        ciudad: "CDMX",
        calle : "Sas",
        numero : 10000
    },
    amigos : ["Agutin 15", "NICE23"],
    activo : true,
    sendMensaje : function(){
        return "enviando msj"
    }

}


alert (user.domicilio.ciudad + " " + user.domicilio.numero);
console.log(user.amigos);
alert(user.activo),
console.log(user.name + " " + user.apellidoM + "" + user.edoCivil),
alert(user.sendMensaje());
