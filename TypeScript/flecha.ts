
let miFuncion = function( a ){
    return a;
}

let miFuncionF = a => a;

console.log( miFuncion("Normal"));
console.log( miFuncionF("Flecha"));

let funcion2 = function(a:number, b:number){
    return a + b;
}

let funcion2F = (a:number, b:number ) => a + b;

console.log( funcion2(3,5));
console.log( funcion2F(3,6));

let funcion3 = function( nombre:string ){
    nombre = nombre.toUpperCase();
    return nombre;
}

let funcion3F = (nombre:string)=> {
    nombre = nombre.toUpperCase();
    return nombre;
}

console.log( funcion3("jose"));
console.log( funcion3F("juan"));




