//here goes something...js!

// first, we need to tell js to build a form, so it can recieve info. we do this by const a form 
// then we tell it to to take the info from the user via addEventListener

const container = document.querySelector('.container');
const searchbox = document.querySelector('#artist');

const form = document.querySelector("form");
    console.log(form);
form.addEventListener('submit', event => {
    console.log("submitted");
    event.preventDefault();
    let search = searchbox.value;
    
    const url = `https://itunes.apple.com/search?term=${search}&limit=8`

    fetch(url, {
        method: 'GET',
        headers: { 'Content_Type': 'application/json' },


    })

        .then(function (response) {
            return response.json()
        })

        .then(function (musics) {
            console.log(musics);
           
            buildGrid(musics.results);


        })
})

function buildGrid(musicArray) {
 
    for (let song of musicArray) {



        let resultsDiv = document.createElement('div');

        
        let title = document.createElement('h4');
        title.innerText = song.trackName;
        title.classList.add("title");
        resultsDiv.appendChild(title);
        
        let album = document.createElement("h5");
        album.innerText = song.collectionName;
        album.classList.add("album");
        resultsDiv.appendChild(album);
        
        let artist = document.createElement('h5');
        artist.innerText = song.artistName;
        artist.classList.add("artist");
        resultsDiv.appendChild(artist);
        
        let artwork = document.createElement("img");
        artwork.src = song.artworkUrl100;
        artwork.classList.add("artwork");
        resultsDiv.appendChild(artwork);
        
        let player = document.createElement("audio");
        player.src = `${song.previewUrl}`;
        player.controls = true;
        player.classList.add("player");
        resultsDiv.appendChild(player);

        resultsDiv.classList.add("songinfo");

        container.appendChild(resultsDiv)
    }
}