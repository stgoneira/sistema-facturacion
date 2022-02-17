document.querySelector("form").addEventListener("submit", (e) => {
    const baseUrl = "https://atkltguookjwtbtvavdu.supabase.co";
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU5MDgwOSwiZXhwIjoxOTU5MTY2ODA5fQ.Cp0etHVDvjVFLPl2RWteZt0j-Mynpm52S6iryYTpbPI";

    // convertimos de texto a numero con parseInt()
    const monto = parseInt( document.getElementById("monto").value ); 
    const glosa = document.getElementById("glosa").value;

    // validar que monto no sea NaN (not a number) con la función isNaN()

    // insertar registro en la tabla de Supabase 
    // fetch de JS: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch 
    // Supabase utiliza la librería PostREST para hacer la API
    // documentación: https://postgrest.org/en/stable/ 
    // la API de Supabase está en: /rest/v1/<nombre_tabla>
    const baseApi       = "/rest/v1/";
    const nombreTabla   = "boletas";
    const url           = baseUrl + baseApi  + nombreTabla; // https://atkltguookjwtbtvavdu.supabase.co/rest/v1/boletas

    const boleta = {
        monto, // debe llamarse igual que la columna de la BD y la variable o constante de su código
        glosa // debe llamarse igual que la columna de la BD y la variable o constante de su código
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey,
            "Prefer": "return=representation"
        },
        body: JSON.stringify( boleta )
    }).then( (response) => {
        if( response.ok ) {
            return response.json();
        } else {
            mostrarErrorAlGenerarBoleta();
        }
    }).then( (data) => {
        mostrarMensajeGeneracionCorrectaBoleta(data);
    }).catch( (err) => alert("Hubo un error en la red, intenté nuevamente!!!"));
});

function mostrarErrorAlGenerarBoleta() {
    // muestran el error en la pantalla del usuario 
}

function mostrarMensajeGeneracionCorrectaBoleta(data) {
    // muestra mensaje de generación correcta boleta 
    alert("Se creo la boleta folio "+data[0].id);
}


