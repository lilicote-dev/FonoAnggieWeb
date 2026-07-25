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
function enviarWhatsApp() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let ciudad = document.getElementById("ciudad").value;
    let servicio = document.getElementById("servicio").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || telefono === "") {
        alert("Por favor complete el nombre y el celular.");
        return;
    }

    let texto =
`Hola Dra. Anggie.

Quiero solicitar una valoración fonoaudiológica.

👤 Nombre: ${nombre}
📱 Celular: ${telefono}
📧 Correo: ${correo}
📍 Ciudad: ${ciudad}
🩺 Servicio: ${servicio}

📝 Motivo de consulta:
${mensaje}`;

    let url = "https://wa.me/573145551004?text=" + encodeURIComponent(texto);

    window.open(url, "_blank");
}
// BOTÓN VOLVER ARRIBA

document.addEventListener("DOMContentLoaded", function(){

    const botonArriba = document.getElementById("btn-arriba");


    window.addEventListener("scroll", function(){

        if(window.scrollY > 500){

            botonArriba.style.display = "flex";

        } else {

            botonArriba.style.display = "none";

        }

    });


    botonArriba.addEventListener("click", function(){

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });


});