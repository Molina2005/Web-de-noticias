import { VerMas } from "../cammon/func.js";

// Funcion para crear card de noticias segun json de cardsNoticias
async function CardsNoticias(){
    const dataCards = await fetch("../../json/cardsNoticias.json");
    const data = await dataCards.json();
    const container = document.getElementById("cards-container");
    data.forEach(card => {
        // Creacion de card y se crea clase para controlar desde css su diseño
        const cardElement = document.createElement("div");
        cardElement.classList.add("card")
        cardElement.innerHTML = `
            <img src="${card.imagen}" alt="${card.title}">
            <h2>${card.title}</h2>
            <p>${card.descripcion}</p>
        `;
        // Crear botón y párrafo
        const { BtnVerMas, parrafo } = VerMas(
            card.id,
            card.textoBtn
        );
        cardElement.appendChild(BtnVerMas);
        cardElement.appendChild(parrafo);
        container.appendChild(cardElement);
    });
}
CardsNoticias();