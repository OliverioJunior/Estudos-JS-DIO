// Módulos são arquivos Js que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo
//Sendo assim, você por organizar melhor seu código, compartilhar variáveis em escopos diferentes e mostrar melhor as dependências dos arquivos, o que torna o código mais limpo;

//Maneiras de exportar um arquivo

export function mostarIdade(pessoa){
    return  ` A idade de ${pessoa.nome} é ${pessoa.idade}`
}
function mostraCidade(pessoa){
    return  ` A idade de ${pessoa.nome} é ${pessoa.cidade}`
}

export {
    mostraCidade
}

//Maneiras de importar 

import {funcao,variavel,classe} from "./arquivo.js" // Você esta importando partes do arquivo

import valorDefault from './arquivo.js' //Importando o arquivo todo;

import {arquivo as Apelido } from './arquivo.js'

Apelido.metodo(); // Com o uso do 'as' você pode dar um apelido a função que você está importando

import * as INFOS from './arquivo.js' // Importudo tudo do arquivo e atribuindo um apelido 

INFOS.metodo();

//No HTML vc tem que usar na tag " <script type = "module" > " para o browser entender que você está usando módulos 

//Módulos sempre estão em "strict mode";

//Podem ser utilizadas em extensões .js e .mjs;

//Para teste locais, é nescessário utilizar um servidor ;

//Ao importar, sempre lembre da extensão(.js,.mjs);

//Ao importar ,sempre ultilze './' como ponto de partida