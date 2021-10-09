function analise (a,b){
    if(a===b){
        console.log(`O número ${a} é igual a ${b}` )
    } else {
        console.log(`Os números são diferentes`)
    }
    if(a+b>10 && a+b<20){
        console.log(`A soma dos valores é ${a+b} está entre 10 e 20`)
    } else{
        console.log(`A soma dos valores é ${a+b} e não está entre 10 e 20`)
    }

}


analise(0,0)
analise(9,25)
analise(9,4)
analise(9,9)