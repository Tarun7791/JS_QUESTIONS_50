let a=10;
let sum=0;

function sumofNumbers(a){
    for(let i=1;i<=a;i++){
        sum=sum+i;
    }
    console.log("The sum of numbers from 1 to ",a," is ",sum);
}

sumofNumbers(a);