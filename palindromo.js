let string = 'luza rocelina a namorada do manuel leu na moda da romana anil e cor azul'
let verificar = 0
let test = []
let test1 = []


function palavra(string){
if(!string) {
    return "Frase inválida"
}

 if(string.split(" ").join("") === string.split("").reverse().join(" ").split(" ").join("")){
     return true
 }   else {
     return false
 }
}

console.log(string.split(" ").join(""))
console.log(string.split("").reverse().join("").split(" ").join(""))
console.log(palavra('luza rocelina a namorada do manuel leu na moda da romana anil e cor azul'))
