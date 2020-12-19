export const authEndpoint = 
"https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const redirectUrl = "https://sk444.github.io/spotify-clone/";
const clientId = "1e21123d034347dab762f3767cb28e23";

const scopes = [
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;