const animeData = [
    {
        title: "Astra Lost in Space",
        description: "A group of high school students are stranded in space and must survive while solving the mystery behind their situation.",
        image: "https://m.media-amazon.com/images/I/81ECIjzLzhL._AC_SY679_.jpg"
    },
    {
        title: "The Ancient Magus' Bride",
        description: "A girl is bought by a non-human sorcerer to become his apprentice and future bride.",
        image: "https://m.media-amazon.com/images/I/91D9Mf4fGzL._AC_SY679_.jpg"
    },
    {
        title: "Erased",
        description: "A man who can time travel attempts to stop a series of kidnappings and murders.",
        image: "https://m.media-amazon.com/images/I/81S5qkmLlTL._AC_SY679_.jpg"
    },
    {
        title: "Mushishi",
        description: "A wandering man helps people by solving problems related to mysterious creatures called Mushi.",
        image: "https://m.media-amazon.com/images/I/71P0aVqbO9L._AC_SY679_.jpg"
    },
    {
        title: "Great Pretender",
        description: "A stylish, globe-trotting story of a group of con artists pulling off elaborate schemes.",
        image: "https://m.media-amazon.com/images/I/91ISzdbS5lL._AC_SY679_.jpg"
    },
    // Add more anime objects here...
];

function displayAnime() {
    const animeList = document.querySelector('.anime-cards');
    animeData.forEach(anime => {
        const card = document.createElement('div');
        card.classList.add('anime-card');

        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>${anime.description}</p>
        `;

        animeList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayAnime);
