const PI = 3.1416; //NO PUEDE CAMBIAR SU VALOR

var numero = 2; //global scope

function suma() {
    let numero = 20; //function, bloque, local scope
    return numero + numero;
}

console.log(numero)

console.log(suma())