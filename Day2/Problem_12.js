let arr=[1,2,3,4,5,6];

function onlyEven(array){
    let newarr=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            newarr.push(array[i]);
        }
    }
    return newarr;
}

console.log("The new array with only even numbers are ",onlyEven(arr));