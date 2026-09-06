function ingresar() {
    let correo = document.getElementById("correo").value.trim();
    let clave = document.getElementById("clave").value;
 
    if (correo === "" || clave === "") {
        alert("Debe completar todos los campos");
        return;
    }
 
    let formatoCorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
 
    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo válido");
        return;
    }
 
    if (clave.length !== 4) {
        alert("La clave debe tener exactamente 4 caracteres");
        return;
    }
 
    if (correo === "admin@sonidovivo.cl" && clave === "1234") {
        window.location.href = "admin.html";
    }
    else if (correo === "cliente@sonidovivo.cl" && clave === "1234") {
        window.location.href = "Index.html";
    }
    else {
        alert("Correo o clave incorrectos");
    }
}