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
        resultsDiv.appendChild(title)
        let album = document.createElement("h5");
        let artist = document.createElement('h5');
        let artwork = document.createElement("img");
        container.appendChild(resultsDiv)
    }
}