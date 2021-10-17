const maca = {
    value : 2,
    name: 4
}

const laranja = {
    value: 3
}



function mapComthis(arr, thisArg) {
    return arr.map(function(i){
       return  i*this.value
      
    }, thisArg)
    
}


const num = [1,2]

console.log("this -> maçã",mapComthis(num, maca))
console.log("this -> laranja",mapComthis(num, laranja))

function mapSemthis(arr){
    return arr.map(function (i) {
        return i * 2;
    });
}

console.log(mapSemthis(num))

