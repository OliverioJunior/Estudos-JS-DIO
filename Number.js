//No JavaScript a declaração dos números tem que ser sem aspas
// Entretando, quando você faz operações aritmétricas, exceto a soma, o compilador converte a string para número
let num = 100

let num2 = '2'

let resultado = num+num2

console.log(resultado) // Como o símbolo do '+' é usado para concatenas Strings, nesse caso ele une a String e o Number

resultado = num-num2

console.log(resultado) //Converte para número

resultado = num/num2

console.log(resultado) //Converte para número

resultado = num*num2

console.log(resultado) //Converte para número


//Métodos

//Método Math.PI

console.log(Math.PI) //Ele contém o número PI guardado

//Método Math.floor(): ele arredonda o número para baixo

let dec = 1.23

console.log(Math.floor(dec)) 

//Método Math.ceil(): ele arredonda o número para cima

console.log(Math.ceil(dec))