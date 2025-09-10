let str="Tarun";


function checkLength(string){
    let temp=string;
    let length=0;

    while(temp[length]!=undefined){
        length++;
    }

    return length;
}

console.log("The length of the string is ",checkLength(str));