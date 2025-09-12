let num=45;

let arr=[23,23,56,44,43,67,45,67];


function findingIndex(num,arr){
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            index=i;
        }
    }
    console.log("The index of your number in the array is ",index);
}


findingIndex(num,arr);