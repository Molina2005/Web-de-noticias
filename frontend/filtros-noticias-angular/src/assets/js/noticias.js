import { VerMas } from "../cammon/func.js";

// Funcion para crear card de noticias segun json de cardsNoticias
async function CardsNoticias(categoria = null){
    const dataCards = await fetch("assets/cardsGeneralNoticias.json");
    const data = await dataCards.json();
    const noticias = categoria ? data.filter(card => card.tipo === categoria) : data;
    const container = document.getElementById("cards-container-noticias");
    container.innerHTML = "";
    noticias.forEach(card => {
        // Creacion de card y se crea clase para controlar desde css su diseño
        const cardElement = document.createElement("div");
        cardElement.classList.add("card-noticias")
        cardElement.innerHTML = `
            <img class="imagen-noticia" src="${card.imagen}" alt="${card.title}">   
            <h2>${card.title}</h2>
            <p>${card.descripcion}</p>
        `;
        // Crear botón y párrafo
        const { BtnVerMas, parrafo } = VerMas(
            card.id,
            card.textoBtn
        );
        // Cargue de informacion
        cardElement.appendChild(BtnVerMas);
        cardElement.appendChild(parrafo);
        container.appendChild(cardElement);
    });
}
window.CardsNoticias = CardsNoticias;
CardsNoticias();