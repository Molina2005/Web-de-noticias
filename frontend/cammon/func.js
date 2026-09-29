
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

export function Favoritos(card){
    const container = document.createElement("div");
    container.classList.add("btn-container-favoritos");
    container.innerHTML = `
        <a class="btn-favoritos${card.id}" href="">
            <img class="imagen-favorito" src="../../img/favorito.png" alt="">
        </a>
    `
    return container
}

export function BtnEliminacionFavoritos(datos){
    const container = document.createElement("div")
    container.classList.add("btn-container-eliminacion-favoritos")
    container.innerHTML = `
        <a class="btn-eliminacion-favoritos${datos.id}" href="">
            <img class="imagen-eliminacion-favoritos" src="../../img/eliminar.png" alt="">
        </a>
    `
    return container
}

export function EliminacionFavoritos(id){
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const data = favoritos.filter(favoritos => favoritos.id !== id)
    localStorage.setItem("favoritos", JSON.stringify(data))
}

export function localStorageFavoritos(card, btn){
    // Se guarda informacion en localStorage para poder reutilizarla posteriormente en apartado de favoritos
    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        // Se verifica si clave ya fue agregada en caso de ya estas no la vuelve a ingresar 
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];        
        if (!favoritos.some(favoritos => favoritos.id === card.id)){
            favoritos.push({
                id: card.id,
                img:card.imagen,
                title: card.title,
                description: card.descripcion,
                txtBtn: card.textoBtn
            })
        }
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    })
}