let str="Tarun Raghuwanshi hi";

let result="";

function removeSpaces(string){
    for(let i=0;i<string.length;i++){
        if(string[i]==" "){
            result=result+"-";
        }
        else{
            result=result+string[i];
        }
    }
    return result;
}

console.log(removeSpaces(str));