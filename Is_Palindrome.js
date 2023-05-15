/*
Write a recursive function called isPalindrome which returns true if the string passed to it
is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

/* My solution worked:
function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length <= 1) return true;
    if (str.charAt(0) === str.charAt(str.length-1))
        return true && isPalindrome(str.substr(1,str.length-2));
    else
        return false;
}
*/

// Given solution
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
 isPalindrome('amanaplanacanalpandemonium') // false
