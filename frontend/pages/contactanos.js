document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("form-contactanos")
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        const dataContactanos = {
            id: crypto.randomUUID(),
            nombreContacto : formulario.elements.nombre.value,
            gmailContacto : formulario.elements.correo.value,
            asuntoContacto : formulario.elements.asunto.value,
            mensajeContacto : formulario.elements.mensaje.value,
        }
        const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
        // Comparacion : usuario no existe lo agreaga
        if (!contactos.some(contactos => contactos.nombreContacto === dataContactanos.nombreContacto)){
            contactos.push(dataContactanos)
        }else{
            alert("Con tu nombre de usuario ya se agrego una peticion de contacto, si quieres enviar otra peticion de contacto por favor cambia tu nombre de usuario")
        }
        formulario.reset();
        localStorage.setItem("contactos", JSON.stringify(contactos))
    })
})