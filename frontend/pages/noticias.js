import { Favoritos, localStorageFavoritos, VerMas } from "../cammon/func.js";

// Funcion para crear card de noticias segun json de cardsNoticias
async function CardsNoticias(){
    const dataCards = await fetch("../../json/cardsGeneralNoticias.json");
    const data = await dataCards.json();
    const container = document.getElementById("cards-container-noticias");
    data.forEach(card => {
        // Creacion de card y se crea clase para controlar desde css su diseño
        const cardElement = document.createElement("div");
        cardElement.classList.add("card-noticias")
        cardElement.innerHTML = `
            <img class="imagen-noticia" src="${card.imagen}" alt="${card.title}">   
            <h2>${card.title}</h2>
            <p>${card.descripcion}</p>
        `;
        // Creacion de boton de favorios y alaerta para notificar agregacion a favoritos
        const btnFavoritos = Favoritos(card)
        btnFavoritos.addEventListener("click", function(){
            alert("Noticia agregada a favoritos")
        })
        // Crear botón y párrafo
        const { BtnVerMas, parrafo } = VerMas(
            card.id,
            card.textoBtn
        );
        // Se pasa localStorage para poder enviar informacion y almacenarla y luego darle uso
        localStorageFavoritos(card, btnFavoritos)
        // Cargue de informacion
        cardElement.appendChild(btnFavoritos)
        cardElement.appendChild(BtnVerMas);
        cardElement.appendChild(parrafo);
        container.appendChild(cardElement);
    });
}
CardsNoticias();