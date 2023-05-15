/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index
at which the value exists. Otherwise, return -1.
*/

function binarySearch(sarr, val) {
    left = 0;
    right = sarr.length - 1;
    i = right / 2;
    while (left < right) {
        if (sarr[i] < val) {
            right = i
        }
        if (sarr[i] > val) {
            left = i;   
        }
        i = left + (right-left) / 2;
    }
    return left;
}

binarySearch([1,5,12,44,66,67,70,80], 44)

console.log(5)
