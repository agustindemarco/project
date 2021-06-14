const getTxtBtn = document.querySelector('#getTxt');
getTxtBtn.addEventListener('click', getData);

function getData() {
  const url = 'data/data.txt';

  fetch (url)
    .then(response => {
      console.log(response);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      console.log(response.type);
      return response.text();
    })
    .then (data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    })
    .finally(() => console.log('final'))
}

