function authenticate() {
    var client_id = "c298d6f931fc45db88dee8d2c14183bc";
    var redirect_uri = "http%3A%2F%2Fwillhamic.com%2Fplaylisterizer%2Findex.html";
    var scope = [
        "user-read-private",
         "user-read-email"
    ].join("%20");

    location.href = "https://accounts.spotify.com/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&scope=" + scope + "&response_type=token";
}

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<here_your_access_token>');
