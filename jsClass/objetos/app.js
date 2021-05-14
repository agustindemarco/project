/*let foo = "String 1"

const variableconst = "String 2"

function miPrimeraFunction () {
    let foo = "texto 2"
    variableconst = "Nuevo string para const"
    //document.getElementById("demo").innerHTML = "Texto cambiado."
    //document.write(5+6);
    console.log(foo)
}

console.log(variableconst)
console.log(foo)*/


const bicicleta = {
    marca: 'oxford',
    peso: 55,
    color: 'amarillo',
    pedaleando: function() {
        console.log("empezar a pedalear")
    },
    parar: function() {
        console.log("se detiene")
    },
    hacerCambios: function() {
        console.log("hacer cambios")
    }
  }

  // const objetoFinal = Object.assign({}, bicicleta) // Asigna un objeto a otro vacio

const primeraParte = {
      firstName: "Agustin",
      lastName: "Demarco"
  }

const segundaParte = {
    cedula: 16513214,
    position: "Programador"
}

// const objetoFinal = {...primeraParte, ...segundaParte} // Une dos objetos

// if (primeraParte.hasOwnProperty("cedula")) {  //Se fija si existe o no la propiedad
//     console.log(primeraParte.cedula)
// }  else {
//     console.log(primeraParte.firstName)
// }

// const userKeys = Object.keys(bicicleta);  // Devuelve un Array con todos los nombre de variables del objeto

// const objetValues = Object.values(bicicleta); // Devuelve un Array con todos los valores de variables del objeto

// const {marca} = bicicleta  // OBTENER LOS VALORES DE UN OBJETO
// console.log(marca)

// console.log(objetoFinal)
// console.log(bicicleta.marca)
