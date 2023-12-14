function validarForm() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Comprueba si el usuario y la contraseña son correctos
    if (usuario === "MuroDigital25" && contrasena === "CCTVdigital") {
        // Redirecciona al otro archivo HTML
        window.location.href = "dashboard.html";
        return false;
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false;
    }
}