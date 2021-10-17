//Método filter()

//Cria um novo array

//não modifica o array original

//array.filter(callback, thisArg)

//callback: função a ser executada em cada elemento

//thisArg: valor de 'this' dentro da função callback

const frutas = ['maçã fuji', 'maçã verde', "laranja","abacaxi"];

console.log(frutas.filter((f) => f.includes('maçã')))

console.log(frutas)