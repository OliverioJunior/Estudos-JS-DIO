//Os Arrays são listas iteráveis de elementos
// Eles contém a propriedade length
// E também a propriedade index

let array = [1,2,3,4,5,6];

console.log(array[0]) // Você acessa a propriedade index

console.log(array.length) // A propriedade length também pode ser usada

//Métodos

//Método push(): ele adiciona um elemento no final do array

array.push('fim') //Adiciona a String 'fim' ao array
console.log(array) //Aqui vemos que o foi adicionado um elemento no final do array
console.log(array[6]) //O último elemento do array

//Método pop(): ele vai remover o elemento no final do array

array.pop()
console.log(array)

//Método shift(): ele vai remover o elemento no ínicio do array

array.shift()

console.log(array)

//Método shift(): ele vai adiciona o elemento no ínicio do array

array.unshift(1)

console.log(array)

//Método includes(): você passa um argumento, caso esse argumento exista ou não, ele retorna um booleano

console.log(array.includes(1))

console.log(array.includes(0))


//Método every(): Você passa uma callback, caso acondição da callback seja verdadeira ou não para todos os elementos do array, ele retorna um booleano

console.log(` Conferindo se todos os elementos são iguais a 5 ${array.every(i =>{
    i === 5
})}`)

//Método some(): Você passa uma callback, caso acondição da callback seja verdadeira ou não para um dos elementos do array, ele retorna um booleano

console.log(` Conferindo se um dos elementos é iguail a 5 ${array.some(i =>{
    i === 5
})}`)

//Método reverse(): ele inverte toda a ordens dos elementos do array

console.log(array.reverse())

//No array você pode interagir com todos os elementos usando o for()

for(let i = 0; i< array.length; i++){
    console.log(`Passando pelo índice[${i}] = ${array[i]}`)
}

