const SUPABASE_URL = 'https://tkqxoqtixhzlrrwspotd.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrcXhvcXRpeGh6bHJyd3Nwb3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgzNjMsImV4cCI6MTk4MzY4NDM2M30.HfaWTJoZaFxI5PwxO4xvxCJ0g_pY6oryjIi4l9w_FAM';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function getVideoGames() {
    const response = await client.from('video_games').select('*, competitors(*)');
    return checkError(response);
}

export async function createCompetitor(competitor) {
    const response = await client.from('competitors').insert(competitor);
    return checkError(response);
}

export async function deleteCompetitor(competitorId) {
    const response = await client.from('competitors').delete().match({ id: competitorId }).single();
    return checkError(response);
}

function checkError(response) {
    return response.error ? console.error(response.error) : response.data;
}
