let arr=[1,2,34,56,44];



function checkingLargeNum(array){
    let largenum=1;

for(let i=0;i<array.length;i++){
    if(array[i]>largenum){
        largenum=array[i];
    }
}
        return largenum;
        
}


console.log("The largest number in the array is ",checkingLargeNum(arr));