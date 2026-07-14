```javascript
// ===============================
// Fono Anggie - Funciones JavaScript
// ===============================


// Mensaje de bienvenida al cargar la página

window.addEventListener("load", function(){

    console.log("Página de la Dra. Anggie cargada correctamente");

});




// Confirmación al usar WhatsApp

const botonesWhatsapp = document.querySelectorAll('a[href*="wa.me"]');


botonesWhatsapp.forEach(function(boton){

    boton.addEventListener("click", function(){

        console.log("Redirigiendo a WhatsApp para agendar cita");

    });

});
```
