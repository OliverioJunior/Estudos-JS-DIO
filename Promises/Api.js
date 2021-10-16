//O que são APIs

//Aplication Programming Interface

//Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end 
//Você consegue acessá-la por meio de URLs.

//As API vem no formato JSON: JavaScript Object Notation

//É muito comum aqui APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando recebemos. 

//Método fech()

/* fech(url, options)
.then(response => response.json())
.then(json => console.log(json)) */

//retorna uma Promise
fech("https://endereco-api.com/", {
    method: 'GET',
    cache: 'no-cache'
})
.then(response => response.json())
.then(json => console.log(json))


fech("https://endereco-api.com/", {
    method: 'POST',
    cache: 'no-cache',
    body:JSON.stringify(data)
})
.then(response => response.json())
.then(json => console.log(json))
