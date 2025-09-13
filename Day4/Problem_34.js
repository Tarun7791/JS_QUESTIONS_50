let num=5;

let arr=[1,2,55,5,6,3,5,5,5,32,5]; // 5 frequency is 5

let count=0;

function frequencyOfno(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            count++;
        }
    }
    return count;
}

console.log(frequencyOfno(arr,num));