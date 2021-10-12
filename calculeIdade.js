function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.name} terá ${this.idade +anos} anos de idade`;
}

const pessoa1 = {
    name:'Maria',
    idade:30
}
const pessoa2 = {
    name:'Carla',
    idade:26
}
const animal = {
    name:'Fiona',
    idade:5,
    raça: 'Pug'
}

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.call(animal, 7))
console.log(calculaIdade.apply(pessoa1, [10]))