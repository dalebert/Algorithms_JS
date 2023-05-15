/*
Write a function called isSubsequence which takes in two strings and checks whether the characters
in the first string form a subsequence of the characters in the second string. In other words, the
function should check whether the characters in the first string appear somewhere in the second
string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    var i = 0;
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
            i++
        }
        if (i >= str1.length) {
            return true
        }
    }
    return false
}

//isSubsequence('hello', 'hello world'); // true
//isSubsequence('sing', 'sting'); // true
//isSubsequence('abc', 'abracadabra'); // true
//isSubsequence('abc', 'acb'); // false (order matters)
isSubsequence('', 'acb');
