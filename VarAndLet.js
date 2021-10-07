var a = 1; /* Quando usamos var para declarar uma variável, ela é declarada no escopo Global */ 
var b = 2;
var c = 3
if(a===1){ /* Aqui temos o escopo dentro do Se */
    var a = 11; // Usando o var, se a condição do IF for verdadeira ele altera o valor de forma global
    let b = 22; // Enquanto o LET, altera o valor apenas dentro do escopo po IF
    var c = 33
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a)
console.log(b)
console.log(c)
