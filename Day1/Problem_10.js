let str="aba";

function isPalindrome(str){
    let newstr="";

    for(let i=str.length-1;i>=0;i--){
        newstr=newstr+str[i];
    }

    if(newstr.toLowerCase()==str.toLowerCase()){
        console.log("It is a palindrome")
    }
    else{
        console.log("It is not a palindrome")
    }



}


isPalindrome(str);