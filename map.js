const myMap = new Map();

//Uma coleção de arrays no formato [chave,valor];
//Pode ser iterado por um loop for...of

//Método set(): ele permite adicionar elementos no Map();
myMap.set('apple', 'fruit');

console.log(myMap) // Map(1) {"apple" => "fruit"}

//Método get(): ele checa o valor do elemento passado por paramêtro
myMap.get("apple"); 

console.log(myMap.get("apple")) //"fruit"

//Método delete(): deleta o elemento passado por paramêtro
console.log(myMap.delete("apple")) // true

console.log(myMap.get("apple")) // undefined

//Map() podem ter chaves de qualquer tipo;
//Map() possuem a propriedade length
//Map() são mais fáceis de iterar;
//Utilizado quando o valor das chaves é desconhecido;
//Os valores tem o mesmo tipo.