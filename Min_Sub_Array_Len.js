/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers
and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater
than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:

Time Complexity - O(n)

Space Complexity - O(1)

Steps:

*/

function minSubArrayLen(arr, target) {
    var i = 0;
    var j = 0;
    var len = 0; // Length of current items
    var min = Infinity; // Minimum length so far
    var sum = arr[i]; // Sum of the items
    while (i < arr.length) {
        if (sum >= target) {
            len = j - i + 1;
            min = Math.min(min,len);
            if (min == 1) { return 1}
            sum -= arr[i]
            i++;
        } else if (j < arr.length - 1) {
            j++;
            sum += arr[j]
        } else { 
            return min === Infinity ? 0 : min;
        }
    }
    return min === Infinity ? 0 : min;
}

//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

