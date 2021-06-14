const BASE_URL = 'http://gateway.marvel.com/v1/public'
const PUBLIC_KEY = '93778d90c5e0b16c0120e6614a6804ef'
const authParams = `apikey=${PUBLIC_KEY}`
const getAPIBtn = document.querySelector("#getAPI");
getAPIBtn.addEventListener("click", get());

// const API_KEY = '117899ae9f7f31ea0f67b71f0bff24064d532996'
function get() {
  // fetch('https://gateway.marvel.com:443/v1/public/comics/70718?apikey=93778d90c5e0b16c0120e6614a6804ef')
  // .then(response => response.json())
  // .then(response => console.log(response))
let url = 'https://gateway.marvel.com:443/v1/public/comics/70718?apikey=93778d90c5e0b16c0120e6614a6804ef';
 var id = url.substring(url.lastIndexOf('/')+1);
 console.log(id)
}

//"http://marvel.com/comics/issue/70718/the_amazing_spider-man_2018_22?utm_campaign=apiRef&utm_source=93778d90c5e0b16c0120e6614a6804ef"

function componentWillMount() {
  const randomChars = getRandomCharacters()

  randomChars.then(response => (response.map((id => handleFetchRelated(id)))))
  
}

function handleFetchRelated(id) {
  let fetchRequest = Promise.race([
    getCharacterById(id),
    new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), 1000)
    })
  ])
  fetchRequest.then(response => console.log(response))
//   => ({
//     randomCharacters: prevState.randomCharacters.concat([response.data.results[0]])
//   })))
//   fetchRequest.catch(error => this.setState({ error : true }))
}


function getRandomCharacters () {
  var offset = getRandomInt(0,1473);
  return getData("characters",`orderBy=modified&offset=${offset}&${authParams}`)
    .then((response) => FetchIds(response.data))
    .then((response) => console.log(response))
  //   {
  //     return response
  // })
}

function FetchIds (data) {
  var randomIds = []
  for (let i=0; i<8; i++) {
    randomIds.push(data.results[i].id)
  }
  return randomIds
}

function getCharacterById (id) {
  return getData(`characters/${id}/comics`,authParams)
    .then((response) => console.log(response))
    // {
    //   return {
    //     data: response.data
    //   }
    // })
}


























function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getData (addURL, auth) {
  return fetch(`${BASE_URL}/${addURL}?${auth}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));

}





function showInHTML(data) {
  const content = document.querySelector(".content");
  console.log(data)
  let html = "";

  // const name = data.result.name;

    // html += `
    //     <p>Autor: ${name} </p>
    //     <a href="${thumbnail}" target="_blank">Click to see image</a>
    //   `;

  content.innerHTML = html;
}
