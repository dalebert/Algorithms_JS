/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array
containing each word capitalized.
*/

function capitalizeWords (arr) {
    function allCaps(str) {
        return str.toUpperCase();
    }
    
    if (arr.length === 1) return [allCaps(arr[0])];
    return [allCaps(arr.shift())].concat(capitalizeWords(arr))
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
