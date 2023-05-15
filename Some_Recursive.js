/*
Write a recursive function called someRecursive which accepts an array and a callback. The
function returns true if a single value in the array returns true when passed to the callback.
Otherwise it returns false.
*/

// SAMPLE INPUT / OUTPUT
const isOd = val => val % 2 !== 0;

function someRecursive(arr, myCallback) {
    if (arr.length === 0) return false;
    if (arr.length === 1) return myCallback(arr[0]);
    return myCallback(arr.pop()) || someRecursive(arr, myCallback)
}

 someRecursive([1,2,3,4], isOd) // true
// someRecursive([4,6,8,9], isOd) // true
// someRecursive([4,6,8], isOd) // false
// someRecursive([4,6,8], val => val > 10); // false
