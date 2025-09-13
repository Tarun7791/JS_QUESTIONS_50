//  charCodeat() to get ascii value
//  fromCharCode() to make character from ascii code
//  if value is > than 97 and less than 122 than it will be a small value


let str="tarun is studying javascript";
let result="";
let word=false;

function firstletterCapital(string){

    for(let i=0;i<string.length;i++){

        let code=string.charCodeAt(i); 

        if(code>=97 && code<=122 && !word){
            result=result+String.fromCharCode(code-32);
            word=true;
        }
        else {
            result=result+string[i];
            if(string[i]===" "){
            word=false;
             }
         }
     }
     return result;

}

console.log(firstletterCapital(str));