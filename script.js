/////////////
// GLOBALS //
/////////////

var saved_tracks = [];
var playlists = [];

////////////////////
// AUTHENTICATION //
////////////////////

function authenticate() {
    var client_id = "c298d6f931fc45db88dee8d2c14183bc";
    var redirect_uri = "http%3A%2F%2Fwillhamic.com%2Fplaylisterizer%2Findex.html";
    var scope = [
    //Images
        "ugc-image-upload",
    //Spotify Connect
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
    //Playback
        "streaming",
        "app-remote-control",
    //Users
        "user-read-email",
        "user-read-private",
    //Playlists
        "playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-read-private",
        "playlist-modify-private",
    //Library
        "user-library-modify",
        "user-library-read",
    //Listening History
        "user-top-read",
        "user-read-playback-position",
        "user-read-recently-played",
    //Follow
        "user-follow-read",
        "user-follow-modify"
    ].join("%20");

    location.href = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&scope=" + scope + "&response_type=token";
}

if (window.location.toString().split("=").length <= 2) {
    authenticate();
}

var accessToken = window.location.toString().split("=")[1].split("&")[0];

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(accessToken);

//////////////////
// SAVED TRACKS //
//////////////////

function getAllSaved() {
    saved_tracks = [];
    getSavedOffset(0);
}

function getSavedOffset(offset) {
    spotifyApi.getMySavedTracks({limit:50, offset:offset})
    .then(function(data) {
        console.log(data.items)
        for (var i = 0; i < data.items.length; i++) {
            saved_tracks.push(data.items[i]);
        }
        if (data.next != null) {
            getSavedOffset(offset + 50);
        }
    }, function(err) {
        console.error(err);
    });
}

///////////////
// PLAYLISTS //
///////////////

function getPlaylists() {
    spotifyApi.getUserPlaylists()
    .then(function(data) {
        console.log(data);
    }, function(err) {
        console.error(err);
    });
}