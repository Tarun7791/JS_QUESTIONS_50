let arr=[122,34,45,3,453,432];

function findsmallNumber(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }

    console.log("The smallest number of the array is ",arr[0]);

}

findsmallNumber(arr);