let num=25;

function printPrimenumbers(num){
    
    for(let i=2;i<=num;i++){
        let isPrime=true;

        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=false;
                break;
            }
            
        }
        if(isPrime==true){
            console.log(i);
        }
    }

}

printPrimenumbers(num);