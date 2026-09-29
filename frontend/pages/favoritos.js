import { BtnEliminacionFavoritos, EliminacionFavoritos, VerMas } from "../cammon/func.js";

// Funcion para crear card de noticias favoritas segun lo seleccionado en noticias y lo guardado en localStorage
async function CardsFavoritos(){
    // Obtener localStorage
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const container = document.getElementById("cards-container-favoritos")
    favoritos.forEach(datos =>{
        const cardElement = document.createElement("div")
        cardElement.classList.add("card-favoritos")
        cardElement.innerHTML = `
            <img class="imagen-favoritos" src="${datos.img}" alt="${datos.title}">   
            <h3>${datos.title}</h3>
            <p>${datos.description}</p>
        `
        // Creacion boton eliminacion de favoritos
        const btn = BtnEliminacionFavoritos(datos)
        btn.addEventListener("click", function(){
            alert("eliminado de favoritos")
            // logica para boton de eliminacion de apartado de favoritos
            EliminacionFavoritos(datos.id)
        })
        // Crear botón ver mas y párrafo
        const { BtnVerMas, parrafo } = VerMas(
            datos.id,
            datos.txtBtn
        );
        cardElement.appendChild(BtnVerMas)
        cardElement.appendChild(parrafo)
        cardElement.appendChild(btn)
        container.appendChild(cardElement)
    })
}
CardsFavoritos();