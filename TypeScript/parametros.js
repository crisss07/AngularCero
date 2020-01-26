//PARAMETROS OPCIONALES, OBLIGATORIOS Y POR DEFECTO
//PARAMETRO OBLIGATORIO
function activar(quien) {
    var mensaje;
    mensaje = quien + " activo la nuclear";
    console.log(mensaje);
}
//PARAMETRO POR DEFECTO
function activar1(quien, cosa) {
    if (cosa === void 0) { cosa = "nuclear"; }
    var mensaje;
    mensaje = quien + " activo la " + cosa;
    console.log(mensaje);
}
//PARAMETRO OPCIONAL
//NO SE PUEDE ENVIAR EL PRIMER DATO OPCIONAL Y EL ULTIMO OBLIGATORIO
function activar2(quien, cosa) {
    var mensaje;
    if (cosa) {
        mensaje = quien + " activo la " + cosa;
    }
    else {
        mensaje = quien + " activo la nuclear";
    }
    console.log(mensaje);
}
activar("Cristian");
activar1("Cristian");
activar2("Cristian", "Nuclear");
