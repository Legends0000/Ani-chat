// Fetch anime data from Jikan API
async function fetchAnime() {
  const response = await fetch('https://api.jikan.moe/v4/top/anime');
  const data = await response.json();
  const animeList = document.getElementById('anime-list');

  data.data.slice(0, 10).forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = `
      <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    `;
    animeList.appendChild(card);
  });
}

// Call the function
fetchAnime();
