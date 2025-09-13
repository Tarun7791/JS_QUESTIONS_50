let arr=[1,2,3,4,4,5,6,7,8];

function isarrayUnique(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]==array[j]){
               return false; 
            }
        }
    }
    return true;
}

console.log(isarrayUnique(arr));


// break = exits only the current loop.

// return = exits the entire function (all loops inside it stop too).