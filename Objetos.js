//Objetos são estrutudas de "chave e valor"

let person = {
    name:'Olivério', //Name é a chave do objeto, e seu valor é a String ' Olivério' 
    age: 20,        //Age é a chave do objeto, e seu valor é o Number 20
}

console.log(`A chave 'name' retorna o valor: ${person.name}`)
console.log(`A chave 'age' retorna o valor: ${person.age}`)

//Duas maneiras que você pode usar para declarar um objeto

person.adress = 'Boanerges Pinheiro'
person['ethnicity'] = 'Black Man'

console.log(person)

//A declaração com conchetes é mais usada quando quer passar o valor de uma variável

let mon = 'nameOfMan'

person[mon] = 'Maria' //Aqui será criada uma Key[nameOfName] e recebe o valor de 'Maria'

console.log(person)

person.mon = 'Lourdes' // Aqui será criada uma Key[mon] com valor de Lourdes

console.log(person)