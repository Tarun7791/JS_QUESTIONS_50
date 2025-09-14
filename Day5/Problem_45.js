let arr=[1,2,3,4];

function numDouble(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]+arr[i];
    }
    return arr;
}

console.log(numDouble(arr));