let str="Tarun";
let obj={};




function charCount(string){
   

    for(let i=0;i<string.length;i++){
        let char=string[i];

        if(obj[char]){  //obj[char] means: look in the object for a key equal to this character.
            obj[char]++;
        }
        else{
            obj[char]=1;
        }
    }

    return obj;
}

console.log(charCount(str));