let str="tarun";

let result="";

function changetoUppercase(string){

    for(let i=0;i<string.length;i++){
    let code=string.charCodeAt(i);


    if(code>=97 && code<=122){
        result=result+String.fromCharCode(code-32);
    }
    else{
        result=result+string[i];
    }

    }
    
    console.log("The uppercase stirng is ",result);
}

changetoUppercase(str);




// charCodeAt() → gives you the number (ASCII code) of a character.

// String.fromCharCode() → converts that number back into a character.