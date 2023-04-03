// write a function that takes in a string and returns counts
// of each character in that string.
// all letters in result should be lower case

// Sample input
// charCount1("Your PIN number is 1234!");
// charCount2("Your PIN number is 1234!");
// charCount3('Hello 1, Hi!');
// charCount3('Hello 1, Hi!');
// charCount('Hello 1, Hi!');

// STEPS:
// Make object to return when done
// Loop over string for each character
        // if char is a number/letter AND is a key in object, add one to counts
        // if char is a number/letter AND not in object, add it to object AND set value to 1234
        // if char is anything else, don't do anything
// Return object

function charCount1(str) {
    var result = {}
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if(result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

// Refactored for aesthetics
function charCount2(str) {
    var result = {}
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if(result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;    
}

// Refactored for aesthetics
function charCount3(str) {
    var obj = {}
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;    
}

// Refactored using efficient alphanumeric function
function charCount(str) {
    var obj = {}
    for (var char of str) {
        if (isAlphaNum(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}


function isAlphaNum (char) {
    var code = char.charCodeAt(0); // first and only char
    if (!(code > 47 && code < 58) && // numeric
        !(code > 64 && code < 91) && // upper alpha
        !(code > 96 && code < 123)) { // lower alpha
            return false;
    }
    return true;
}

charCount('Hello WORLD 1, Hi?!$(*');
