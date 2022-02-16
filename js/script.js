// load y DOMContentLoaded 
window.addEventListener('DOMContentLoaded', (loadEvent) => {
    $("header").load("trozos-codigo/header.html");
    $("footer").load("trozos-codigo/footer.html");
});

document.getElementById("form-descarga-doc-tributario")
    .addEventListener("submit", (submitEvent) => {
        submitEvent.preventDefault();        
        const form          = submitEvent.currentTarget;
        let tipoDocumento   = "";
        let errores         = "";

        if( form[0].checked ) {
            tipoDocumento = "boleta";
        } else if(form[1].checked) {
            tipoDocumento = "factura";
        } else if(form[2].checked) {
            tipoDocumento = "nota de credito";
        } else {
            errores = errores + "Debe seleccionar un tipo de documento. ";
        } 

        const folio = parseInt( form[3].value );
        const monto = parseInt( form[4].value );

        // validacion folio que se mayor a 1 y que no sea NaN (not a number)
        if( folio < 1 || isNaN(folio) ) {
            errores = errores + "El folio no debiese ser menor que 1. ";
        }

        // validacion monto 
        if( monto < 1 || isNaN(monto)) {
            errores = errores + "El monto debe ser mayor a 0. ";
        }

        if( errores.length > 0) {
            mostrarErroresValidacion(errores);
        } else {
            redirigirADocumentoTributario();
        }

        return false; 
});

function mostrarErroresValidacion(errores) {
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = errores; // inserta el texto de la variable errores dentro del DIV
    mensajes.classList.remove("d-none"); // quita la clase CSS "d-none"    
}

function redirigirADocumentoTributario() {

}
