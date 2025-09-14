let str="taarunt";




function nonrepeatCh(string){

    let count={};

    for(let ch of string){
        if(count[ch]){
            count[ch]++;
        }
        else{
            count[ch]=1;
        }
    }

    for(let ch of string){
        if(count[ch]==1){
            return ch;
        }
    }


}


console.log(nonrepeatCh(str));