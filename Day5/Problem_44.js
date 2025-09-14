let num=25;
let arr=[];

function changeintoBinary(num,arr){

    while(num!=0){
        let rem=num%2;
        arr.push(rem);
        num=Math.floor(num/2);

    }

    return arr.reverse();
}

console.log(changeintoBinary(num,arr));