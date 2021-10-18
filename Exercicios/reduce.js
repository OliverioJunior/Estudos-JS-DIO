function somaNumeros(arr) {
  return  arr.reduce(function(p,c) {
        console.log({p})
        console.log({c})
        return p + c;
    })
}

const arr = [1,2,3,4,5,6];


//console.log(somaNumeros(arr))


const lista = [
    {
        name:'sabao em po',
        preco: 30
    },
    {
        name:'cereal',
        preco: 12
    },
    {
        name:'toalha',
        preco: 30
    }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(p,c,i){
        console.log({p});
        console.log({c});
        console.log(i+1);
        return p - c.preco
    },saldoDisponivel)
}
console.log(calculaSaldo(saldoDisponivel, lista))
