const getJSONBtn = document.querySelector("#getJSON");
getJSONBtn.addEventListener("click", getData);

function getData() {
  const url = "data/item.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => showInHTML(data))
    .catch((error) => console.log(error));
}

function showInHTML({ name, details: { color, model, release_date } }) {
  const content = document.querySelector(".content");
  content.innerHTML = `
    <p>Product: ${name} </p>
    <p>Model: ${model} </p>
    <p>Color: ${color} </p>
    <p>Release Date: ${release_date.slice(0, 4)} </p>
    `;
}
