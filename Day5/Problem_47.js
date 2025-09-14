let arr=[1,2,3,4,1,1,4,4,4,4,5,5,32];



function mostFrequent(array){
    let count={};
    let maxfreq=0;
    let mostfreqElement= null;

    for(let num of array){
        count[num]=(count[num] || 0) +1;
    }

    for(let num in count){
        if(count[num]>maxfreq){
            maxfreq=count[num];
            mostfreqElement=num;       
         }
    
    }

    return mostfreqElement;
    
}

console.log(mostFrequent(arr));
