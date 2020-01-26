function getNombre(){
    return "Cristian";
}

let nombre:string = "Cristian";
let apellido:string = "Chamby";
let edad:number = 26;


//let texto = "hola, " + nombre + " " + apellido + "("+ edad +")";

let texto = `Hola,
${ nombre }
${ apellido }
(${ edad })`;

//let texto2 = `${ 1 + 2 }`;
let texto2 = `${ getNombre() }`;
console.log( texto2 );