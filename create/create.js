import { createCompetitor, getVideoGames } from '../fetch-utils.js';

const selectEl = document.querySelector('select');
const form = document.querySelector('form');

window.addEventListener('load', async () => {
    const games = await getVideoGames();

    for (let game of games) {
        const gameOption = document.createElement('option');

        gameOption.textContent = game.name;
        gameOption.value = game.id;

        selectEl.append(gameOption);
    }
});



form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const contact = data.get('contact');
    const gameId = data.get('game-id');

    await createCompetitor({
        name: name,
        contact_info: contact,
        game_id: gameId,
    });
    window.location.replace('/');
});
