//PARAMETROS OPCIONALES, OBLIGATORIOS Y POR DEFECTO

//PARAMETRO OBLIGATORIO

function activar( quien:string ){

    let mensaje:string;

    mensaje = `${ quien } activo la nuclear`;
    console.log( mensaje );
}

//PARAMETRO POR DEFECTO

function activar1( quien:string, cosa:string = "nuclear" ){

    let mensaje:string;

    mensaje = `${ quien } activo la ${ cosa }`;
    console.log( mensaje );
}

//PARAMETRO OPCIONAL
//NO SE PUEDE ENVIAR EL PRIMER DATO OPCIONAL Y EL ULTIMO OBLIGATORIO

function activar2( quien:string, cosa?:string ){

    let mensaje:string;
    if (cosa) {
        mensaje = `${ quien } activo la ${ cosa }`;
    } else {
        mensaje = `${ quien } activo la nuclear`;
    }
    console.log( mensaje );
}

activar("Cristian");
activar1("Cristian");
activar2("Cristian", "Nuclear");