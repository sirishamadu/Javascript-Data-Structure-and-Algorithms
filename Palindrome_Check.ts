//Palindrome Check: Write a function that checks whether a given string is a palindrome or not.
let str = 'madam';
let isPalindrome = function(s){
    let j = s.length-1
    for(let i=0; i<s.length/2; i++){
        if(s[j] !== s[i]){
            console.log(s + ' is not palindrome');
            return false;
        }
        
        else{
            j--;
        }
        console.log(s + ' is palindrome');
        return true;
    }
}
isPalindrome(str);


//#1let str = 'madam';
// let isPalindrome = function(s){
//     let newStr = s.split('').reverse().join('');
//     if(newStr === s)
//     console.log(newStr + ' is palindrome');
//     else
//     console.log(newStr + ' is not palindrome');
// }
// isPalindrome(str);