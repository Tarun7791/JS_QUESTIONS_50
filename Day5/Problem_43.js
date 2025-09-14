let arr=[1,2,"Tarun",29,NaN,undefined];


function removenonNumeric(array){

     array=array.filter(item => typeof item==='number' && !isNaN(item)); // This is crucial because typeof NaN also returns 'number'

    return array;
}

console.log(removenonNumeric(arr));