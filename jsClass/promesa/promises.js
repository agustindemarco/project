// const timePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('2');
//     }, 2000);
// })

// const inOrderPrint = async () => {
//     console.log('1');
//     console.log(await timePromise);
//     console.log('3');
// }

// const inOrderPrint = () => {
//     console.log('1');
//     timePromise.then((resolveResponse) => console.log(resolveResponse))
//     .then(() => console.log('3')).finally(() => console.log('4'));
// }

// console.log(inOrderPrint())


const ApiTest1 = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    // console.log(response);
}

const ApiTest2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const promisedResponse = await response.json();
    console.log(promisedResponse);
}

ApiTest1();
ApiTest2();