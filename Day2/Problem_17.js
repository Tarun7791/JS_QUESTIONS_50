
let  a=5155;
let arr=[];

function arrayofNumbers(a,arr){
    let temp=a;
    while(temp!=0){
    let rem=temp%10;
    arr.unshift(rem);
    temp=Math.floor(temp/10);
    }

    for(numbers of arr){
        console.log(numbers);
    }

}

arrayofNumbers(a,arr);