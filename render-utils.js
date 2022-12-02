export function renderVideoGames(gameObject) {
    const gameEl = document.createElement('div');
    const nameEl = document.createElement('h3');

    const img = document.createElement('img');
    img.src = gameObject.id;

    nameEl.textContent = gameObject.name;
    gameEl.classList.add('gameEl');
    gameEl.append(nameEl);

    return gameEl;
}