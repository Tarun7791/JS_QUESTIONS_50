let arr=[2,3,4,6,8,12,44,54,102,34,98,224,435];



function largestEvennum(arr){
    let highestNum=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0 && arr[i]>highestNum){
            highestNum=arr[i];
        }
    }

    return highestNum;
}


console.log(largestEvennum(arr));