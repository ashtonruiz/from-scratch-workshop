export function renderVideoGames(gameObject) {
    const gameEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const img = document.createElement('img');

    img.src = `./assets/${gameObject.id}.png`;

    nameEl.textContent = gameObject.name;
    gameEl.classList.add('gameEl');
    gameEl.append(nameEl, img);

    return gameEl;
}

export function renderCompetitors(competitorObject) {
    const competitorEl = document.createElement('div');
    const nameEl = document.createElement('h3');


    nameEl.textContent = competitorObject.name;
    competitorEl.classList.add('competitorEl');
    competitorEl.append(nameEl);

    return competitorEl;
}

export function renderContact(contactObject) {
    const contactEl = document.createElement('div');
    const nameEl = document.createElement('h3');


    nameEl.textContent = contactObject.name;
    contactEl.classList.add('contactEl');
    contactEl.append(nameEl);

    return contactEl;
}