// Crear Arrays
const numeros = [10, 20, 30];
// const meses = new Array('Enero', 'Febrero', 'Marzo');
const arregloCombinado = ['Julio', 22, true , [1, 2, 3, 4 ,5]];


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
meses.push('Junio');
// meses.unshift('Primera Posicion');

// console.log('Mi mes', meses[1]);
// console.log(meses.length);


// RECORRIENDO UN ARRAY 

// for (let i = 0; i < meses.length; i++){
//     console.log(meses[i]);
// }

const cart = [
    { name: 'Monitor', price: 500 },
    { name: 'TV', price: 100 },
    { name: 'Tablet', price: 200 },
    { name: 'Headphones', price: 300},
    { name: 'Phone', price: 700},
];

// for (let i = 0; i < cart.length; i++){
//     console.log(`${cart[i].name} - $${cart[i].price }` );
// }

// cart.forEach( function(product) {               //DIFERENTE MANERA IGUAL RESULTADO
//     console.log(`${product.name} - Price: ${product.price }` );
//     // Expected output: Print each cart item
// } )

const newArrayOfProductNames = cart.map(function(product) {
    if (product.price < 400)
    return `Product: ${product.name} - ${product.price}`;
    else return 0
    // Expected output: Print the name of each product in the cart
});

console.log(newArrayOfProductNames);

const result = cart.filter(function(product) {  
    return product.price > 400;
});

console.log(result);
