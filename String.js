// Declarar uma variável tipo String

var nome = 'João' // Para ser String existe na nescessidade das aspas

let sobrenome = 'Pedro' 

console.log(`O tipo da variavéis é ${typeof(nome)} e ${typeof(sobrenome)}`)

// Existe métodos já feitos para manipular variavéis String no JavaScript

//concat() = ele une as duas Strings sem alterar as originais

console.log(`Strings unidas ${nome.concat(sobrenome)}`) // para guardar o valor é nescessário cria outra String

let concatenado = nome.concat(sobrenome)

console.log(`Agora a variável ${concatenado} é a união de duas Strings, Ela mantei o mesmo tipo ${typeof(concatenado)}`)

//length: esse método lhe dá quantas unidades existe dentro de sua String

console.log(concatenado.length)

let nomeComEspaço = nome + " " + sobrenome

console.log(nomeComEspaço.length) // Agora o resultado é 10. A propriedade length conta tbm os espaços contidos na String, sendo assim, cada letra e espaço é considerada uma unidade.

// Outra maneira de declarar uma String é usando o new String

let string = new String('exemplo') // Entretando, a tipagem será de um objeto

console.log(`A tipagem será de um objeto ${typeof(string)}`)
console.log(`${string}`) 

//Na String, podemos da a posição de uma unidade para nos retornadar quem representa essa posição

console.log(`A posição 2 na variavél nome é "${nome[3]}"`) // lembre que a constagem de lista no JavaScript começa do 0

console.log(`A posição 2 na variavél nome é "${nome[0]}"`)
console.log(`Lembre que a constagem de lista no JavaScript começa do 0`)
console.log(`A posição 2 na variavél nome é "${nome[1]}"`)
console.log(`A posição 2 na variavél nome é "${nome[2]}"`)
console.log(`A posição 2 na variavél nome é "${nome[3]}"`)
console.log(`A posição 2 na variavél nome é "${nome[4]}"`) // Como não tem nada nessa posição, o valor retornado é indefinido

// \n é usado para fazer quebra de linha Ex

nomeComEspaço = nome + "\n" + sobrenome

console.log(nomeComEspaço) //

nomeComEspaço = nome + "\n" + "\n" + sobrenome

console.log(nomeComEspaço) //Aqui fica claro a quebra de linha

let frase = "Olá, tudo bem?"

//Método split(): ele separa os itens contidos na sua String

console.log(frase.split("")) //Ele não altera a variavel frase

console.log(frase.split(" ")) //Aqui ele só separa quando tiver espaço 

console.log(frase.split("/")) //Como ele não encontrar em nenhuma unidade a "/" ele retorna a String inteira

//Método includes(): ele retorna um boleano, caso vc esteja procurando uma palavra ou letra contida dentro da String

console.log(frase.includes('a')) // Aqui retornará falso, já que em Olá a letra 'a' esta acentuada
console.log(frase.includes('Olá')) // Aqui retornará true, já que contem Olá na nossa String

//Método stratsWith(): ele retorna um boleando, caso a String comece com o parâmetro passado

console.log(frase.startsWith('O'))
console.log(frase.startsWith('o')) // Note que o parâmetro tem que ser === ao encontrado na String

//Método endsWith(): ele retorna um boleando, caso a String termine com o parâmetro passado

console.log(frase.endsWith('?'))

//Método replace(): ele recebe dois argumento, o primeiro argumento procura pelo elemento passado na String, caso o elemento exista, ele é substituído pelo segundo argumento. OBS: ela não altera a frase principal

console.log(frase.replace(',','!'))



