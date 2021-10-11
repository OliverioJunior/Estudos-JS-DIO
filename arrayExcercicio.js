function substituiPares(arr){
    if(!arr || !arr.length) return -1;

    for(let i = 0; i <arr.length; i++){
        if(arr[i] === 0){
            console.log("Você já é zero!!")
        } else if (arr[i] % 2 === 0 ){
            console.log(`Substituindo ${arr[i]} por 0...`)
            arr[i] = 0;
        }
    }

    return arr;
}

let arr = [1,2,5,6,8,4,52,3,6,43,7,9];
console.log(substituiPares(null))