let num=4;

function checkPrime(num){
    let isPrime=false;
    for(let i=2;i<=num-1;i++){
        if(num%i!=0){
            isPrime=true;
        }
        else{
            isPrime=false;
            break;
        }
    }

    if(isPrime || num==1){
        console.log("It is a prime number ")
    }
    else{
        console.log("It is not a prime number")
    }
}


checkPrime(num);