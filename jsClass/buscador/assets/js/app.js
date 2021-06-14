const getLyrics = document.querySelector("#search");
getLyrics.addEventListener("click", getSuggest);
var suggests = [];
const apiUrl = "https://api.lyrics.ovh";

function getSuggest() {
  var song = document.querySelector("#title").value;
  var url = apiUrl + "/suggest/" + song;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showSuggest(data))
    .catch((error) => console.log(error));

}

function showSuggest(data) {
  suggests = [];
  const sug = document.querySelector(".sugerencias");
  const a = data.data;
  let html = "";
  for (let i=0; i < 6; i++){
    var artist = a[i].artist.name;
    var title = a[i].title
    html += `<li><input type="radio" name="song${i}" id="${i}"><label for="song${i}">${artist} - ${title}</label></li>`;
    suggests.push({
      artist: artist,
      song: title
    });
  }
  html += `<button id="searchLetter">Buscar Letra</button>`
  sug.innerHTML = html;
  const getLetter = document.querySelector("#searchLetter");
  getLetter.addEventListener("click", getData);
}


function getData() {
  const checked = document.querySelector('input[type=radio]:checked').id;
  let artista = suggests[checked].artist
  let titulo = suggests[checked].song
  var url = apiUrl + "/v1/"+ artista + "/" + titulo;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showInHTML(data))
    .catch((error) => console.log(error));
}

function showInHTML(data) {
  const content = document.querySelector(".song");
  const lyrics = data.lyrics;
  content.innerHTML = lyrics.replaceAll("\n", "<br />");
}





