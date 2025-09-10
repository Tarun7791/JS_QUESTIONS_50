let arr=[12,13,43,15,16,35];


function secondLargest(arr) {
    for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            console.log(arr[i],arr[j]);
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                 console.log(arr[i],arr[j]);
        }
    }
}
console.log("The second largest number in the array is ",arr[arr.length-2]);

}


secondLargest(arr);