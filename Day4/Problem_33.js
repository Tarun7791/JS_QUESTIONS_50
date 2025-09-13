let sentence="Undertaker is my favourite wrestler";

let longestword="";


function longestWord(sentence){

    let words=sentence.split(" ");

    for(word of words){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }

    return longestWord;
}

console.log(longestWord(sentence));