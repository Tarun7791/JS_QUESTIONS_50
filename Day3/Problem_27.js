let arr=[];

let a=0,b=1;
arr.unshift(a,b);

let n=5;

let fibonacciSeries =(n,arr)=>{
    for(let i=0;i<=n-2;i++){
    let c=a+b;
    arr.push(c);
    a=b;
    b=c;
    }
}


fibonacciSeries(n,arr);
console.log(arr);