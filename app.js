/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { renderVideoGames } from './render-utils.js';
import { deleteCompetitor, getVideoGames } from './fetch-utils.js';

/* Get DOM Elements */
const gameListEl = document.querySelector('.video-games-list');

/* Events */
window.addEventListener('load', async () => {
    await fetchAndDisplayVideoGames();
});

/* Display Functions */
async function fetchAndDisplayVideoGames() {
    gameListEl.textContent = '';
    const videoGames = await getVideoGames();
    for (let game of videoGames) {
        const gameEl = renderVideoGames(game);
        const competitorsEl = document.createElement('ul');
        for (let competitor of game.competitors) {
            const competitorEl = document.createElement('li');
            competitorEl.textContent = `Competitor: ${competitor.name} ${competitor.contact_info}`;

            competitorEl.addEventListener('click', async () => {
                await deleteCompetitor(competitor.id);
                gameListEl.textContent = '';
                fetchAndDisplayVideoGames();
            });
            competitorsEl.append(competitorEl);
        }
        gameEl.append(competitorsEl);
        gameListEl.append(gameEl);
    }
}
