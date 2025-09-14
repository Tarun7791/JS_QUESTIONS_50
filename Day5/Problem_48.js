let arr=[1,2,3,4,5];

let obj={

};

function sumandAvg(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }

    let avg=sum/array.length;

    obj.sum=sum;
    obj.avg=avg;

    return obj;
    
}


console.log(sumandAvg(arr));