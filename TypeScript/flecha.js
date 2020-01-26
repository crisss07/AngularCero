var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
var funcion2 = function (a, b) {
    return a + b;
};
var funcion2F = function (a, b) { return a + b; };
console.log(funcion2(3, 5));
console.log(funcion2F(3, 6));
var funcion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var funcion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(funcion3("jose"));
console.log(funcion3F("juan"));
