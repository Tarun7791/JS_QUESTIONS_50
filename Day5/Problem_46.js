let a=45;
let b=30;




function findGcd(x,y){
    let gcd=1;
    let lowestval;

    if(x>y){
        lowestval=y;
    }
    else{
        lowestval=x;
    }

    for(let i=2;i<=lowestval;i++){
        if(x%i==0 && y%i==0){
            gcd=i;
    }
    }

    return gcd;
}

console.log(findGcd(a,b));