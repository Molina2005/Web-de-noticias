
export function VerMas(idNoticia, text){
    const BtnVerMas = document.createElement("button")
    BtnVerMas.textContent = "Ver mas"
    const parrafo = document.createElement("p")
    parrafo.id = idNoticia;
    parrafo.textContent = text;
    parrafo.style.display = "none";
    BtnVerMas.addEventListener("click", function(){
        if (parrafo.style.display == "none"){
            parrafo.style.display = "block";
        }else {
            parrafo.style.display = "none";
        }
    });
    return {
        BtnVerMas,
        parrafo
    };
}

