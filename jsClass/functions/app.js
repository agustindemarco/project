// ARROW FUNCTIONS
const numeros = [10, 20, 30];

// const result = numeros.map(function(n) { return n*2 } )

// const result = numeros.map((n) => n*2 )        // Mas limpio

// const myMethod = () => (console.log('Do Something'))

// console.log(result);

// console.log(myMethod);

// var obj = {
//     count: 10,
//     doSomething: function() {
//         setTimeout(function() {              //USO DE BIND
//             this.count++;
//             console.log(this.count)
//         }.bind(this), 300);
//     } 
// }


var obj = {
    count: 10,
    doSomething: function() {
        setTimeout(() => {
            this.count++;                       //NO USA BIND
            console.log(this.count)
        }) 

    } 
}

obj.doSomething();