const getAPIBtn = document.querySelector("#getAPI");
getAPIBtn.addEventListener("click", getData);

function reqListener() {
  console.log(this.responseText);
  const response = this.responseText;
  console.log(JSON.parse(response));
}

function getData() {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://picsum.photos/v2/list");
  oReq.send();
}