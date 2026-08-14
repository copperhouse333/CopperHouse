/* =====================================================
   ABRIR CONTENEDOR
===================================================== */

function abrirContenedor(id){

    const contenedor =
        document.getElementById(id);

    if(!contenedor){
        console.error(
            "No existe el contenedor: " + id
        );
        return;
    }

    contenedor.style.display = "block";

}



/* =====================================================
   CERRAR CONTENEDOR
===================================================== */

function cerrarContenedor(id){

    const contenedor =
        document.getElementById(id);

    if(!contenedor){
        console.error(
            "No existe el contenedor: " + id
        );
        return;
    }

    contenedor.style.display = "none";

}



/* =====================================================
   MOSTRAR / OCULTAR FORMULARIO DE PRODUCTO
===================================================== */

function mostrarFormularioProducto(){

    const formulario =
        document.getElementById(
            "formularioProducto"
        );

    if(!formulario){
        return;
    }

    formulario.style.display = "block";

}



/* =====================================================
   OCULTAR FORMULARIO DE PRODUCTO
===================================================== */

function ocultarFormularioProducto(){

    const formulario =
        document.getElementById(
            "formularioProducto"
        );

    if(!formulario){
        return;
    }

    formulario.style.display = "none";

}



/* =====================================================
   ALTERNAR CONTENEDOR
   ESTA FUNCIÓN TAMBIÉN ES REUTILIZABLE
===================================================== */

function alternarContenedor(id){

    const contenedor =
        document.getElementById(id);

    if(!contenedor){
        console.error(
            "No existe el contenedor: " + id
        );
        return;
    }


    if(
        contenedor.style.display === "none" ||
        contenedor.style.display === ""
    ){

        contenedor.style.display = "block";

    }

    else{

        contenedor.style.display = "none";

    }

}
