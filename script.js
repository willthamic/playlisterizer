location.href = 
    "https://accounts.spotify.com/authorize" +
    "?client_id=c298d6f931fc45db88dee8d2c14183bc" +
    "&redirect_uri=C%3A%5CDrive%5CCode%5Cplaylisterizer%5Cindex.html" + 
    "&scope=user-read-private%20user-read-email" + 
    "&response_type=token" + 
    "&state=123";

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<here_your_access_token>');
