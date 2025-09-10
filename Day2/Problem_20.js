let sentence="Tarun is the boy ";
let count =0;
let inword=false;

function countWords(string){

    for(let i=0;i<string.length;i++){
        if(string[i]!=" " && !inword){
            count++;
            inword=true;
        }
        else if(string[i]===" "){
            inword=false;
        }
    }

    console.log("Numbers of word in this sentence is ",count)


    
}

countWords(sentence);

