// script.js

document.addEventListener("DOMContentLoaded", function() {
    var registrarButton = document.forms[0].querySelector("button");
    var iniciarSesionButton = document.forms[1].querySelector("button");

    registrarButton.addEventListener("click", function() {
        var nombre = document.forms[0].elements["nombre"].value.trim();
        var email = document.forms[0].elements["email"].value.trim();
        var contrasena = document.forms[0].elements["contrasena"].value.trim();

        // Verificar si el email contiene "@gmail.com"
        if (nombre && email && email.includes("@gmail.com") && contrasena) {
            alert("REGISTRANDO");
        } else {
            alert("Faltan datos en la solicitud o la dirección de correo es incorrecta");
        }
    });

    iniciarSesionButton.addEventListener("click", function() {
        var emailLogin = document.forms[1].elements["email-login"].value.trim();
        var contrasenaLogin = document.forms[1].elements["contrasena-login"].value.trim();

        // Verificar el formato del correo electrónico en el inicio de sesión
        if (emailLogin.includes("@") && contrasenaLogin) {
            alert("INICIANDO SESION");
        } else {
            alert("Datos incorrectos");
        }
    });
});
