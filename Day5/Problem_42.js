 let num=4;

function isPerfectnumber(number){
    let root=Math.sqrt(number);  // square of perfect number is always whole number not in points

    if(root===Math.floor(root)){ // so if it has points it is not a perfect number
        console.log("it is a perfect square");
    }
    else{
        console.log("it is not a perfect square");
    }
}


isPerfectnumber(num);



















// function isPerfectnumber(number){
//     for(let i=1;i<=number;i++){
//         if(i*i==number){
//             console.log("It is a perfect square");
//             return;
//         }
        
//     }
//     console.log("it is not a perfect square");
// }

// isPerfectnumber(num);