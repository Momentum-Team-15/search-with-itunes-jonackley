const container = document.querySelector('.container');

const url = 'https://itunes.apple.com/search?term=jack+johnson&limit=8.'
let result

fetch(url, {
    method: 'GET',
    headers: {'Content_Type' : 'application/json'},

})

.then(function(response) {
    return response.json()
})

.then(function(musics){
    console.log(musics)
   for(let music of musics.results) {
      console.log(`${music.trackName} by ${music.artistName} ${music.artworkUrl100}`)

   }
    buildGrid(musics.results)        
      

})

function buildGrid(musicArray) {
    for (let song of musicArray){
        let resultsDiv = document.createElement('div');
        let title = document.createElement('h4');
        title.innerText = song.trackName
        title.classList.add('title')
        resultsDiv.appendChild(title)

        let album = document.createElement("h5");
        album.innerText = song.collectionName
        resultsDiv.appendChild(album)

        let artist = document.createElement('h5');
        artist.innerText = song.artistName
        resultsDiv.appendChild(artist)

        let artwork = document.createElement("img");
        artwork.src = song.artworkUrl100
        resultsDiv.appendChild(artwork)

        resultsDiv.classList.add("songinfo")
        container.appendChild(resultsDiv)
    }
}