//Promises

//Assíncrono é algo que não ocorre e não se efetiva ao mesmo tempo

//Promises é um objeto de processamento assíncrono 

// Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

// Ela contém 3 estados     

// 1 - Pending que é quando ela está pendente

// 2 - Fulfilled que é o completado 

// 3 - Rejected que é quando deu algum erro 

//Estrutura

/* const myPromisse =  new Promise((resolve, reject) =>{
    window.setTimeout(()=>{
        resolve(console.log('Resolvida'));
    }, 2000);
})

Caso sua promisse seja bem sucedida

await myPromisse
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou')
    .catch((err) => console.log(err.message)); */


//Async/await

//funções assíncronas precisam dessas duas palavras chave

async function resolvePromise(){
    const myPromise = new Promise((resolve,reject) =>{
        window.setTimeout(()=>{
            resolve(console.log('Resolvida'));
        }, 2000);
    })
    
        const resolved = await myPromise
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'e agora acabou')
        .catch((err) => console.log(err.message));

        return resolved
}

//Se você chamar a promise em o await, ela retorna outra promise
// lembre-se de usar o await
