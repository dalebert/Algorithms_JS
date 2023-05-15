/* Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the
target average. There may be more than one pair that matches the average target.

Use multiple pointers 

Time: O(n)
Space: O(1)
*/

function averagePair(arr, avg) {
    // add whatever parameters you deem necessary - good luck!
    var i = 0;
    var j = arr.length - 1;
    while (i < j) {
        let temp_avg = (arr[i] + arr[j]) / 2;
        if (temp_avg == avg) {
            return true
        }
        if (temp_avg < avg) {
            i++
        } else {
            j--
        }
    }
    return false
}

averagePair([1,2,4,5], 3)
