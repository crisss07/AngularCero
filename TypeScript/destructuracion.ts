//DESTRUCTURACION DE OBJETOS
let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
}

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
let {nombre, clave, poder} = avenger;

console.log(nombre, clave, poder);

//DESTRUCTURACION DE ARREGLOS

let avengers:string[] = ["thor", "steve", "tony"];

let [thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);
 