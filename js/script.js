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

        // validacion folio 
        if( folio < 1) {
            errores = errores + "El folio no debiese ser menor que 1. ";
        }

        // validacion monto 
        if( monto < 1) {
            errores = errores + "El monto debe ser mayor a 0. ";
        }

        if( errores.length > 0) {
            mostrarErroresValidacion();
        } else {
            redirigirADocumentoTributario();
        }

        return false; 
});

