localStorage.setItem('ejemplo1', 'EJEMPLO TEXTO 1');
localStorage.setItem('ejemplo2', 'EJEMPLO TEXTO 2');


let data1 = localStorage.getItem('ejemplo1'); 
let data2 = localStorage.getItem('ejemplo2');

console.log(`ejemplo1: ${data1}, ejemplo2: ${data2}`);

localStorage.removeItem('ejemplo2')

localStorage.clear();

const username = 'Agustin';

document.cookie = `username=${username}; expires=Fri, 31 Dec 9999 23:59:00 GMT`;