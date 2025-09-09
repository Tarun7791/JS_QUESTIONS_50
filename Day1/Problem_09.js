let vowel=0;

let str="AEiepp";
    str=str.toLowerCase();

for(let i=0;i<str.length;i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]== 'u'){
        vowel++;
    }
}

console.log("The vowel in the current string is ",vowel);