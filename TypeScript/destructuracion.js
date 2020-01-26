//DESTRUCTURACION DE OBJETOS
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Fuerza"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
//DESTRUCTURACION DE ARREGLOS
var avengers = ["thor", "steve", "tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
