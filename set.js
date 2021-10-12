const myArray = [1,2,3,4,5,6,7,8,9,0];

const mySet = new Set(myArray);

//Set(): são estruturas que armazenam apenas valores únicos

//Métodos:
mySet.add(10); // adiciona valores no Set() caso ele não exista ;



console.log(mySet.has(1)) // Confere se existe o elemento dentro do Set();
 

mySet.delete(10) // Deleta um elemento dentro do Set

console.log(mySet.size)

//Sobre o método set()

//Possui valores únicos;
//Em vez da propriedade length, consulta-se o números de registro pela propriedade size; 
//Não possui os métodos map,filter,reduce, etc;