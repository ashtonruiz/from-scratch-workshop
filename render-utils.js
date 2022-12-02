export function renderVideoGames(gameObject) {
    const gameEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    nameEl.textContent = gameObject.name;
    gameEl.classList.add('gameEl');
    gameEl.append(nameEl);

    return gameEl;
}