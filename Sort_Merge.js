// My solution which seems to work
function mergeByMe(sarr1, sarr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < sarr1.length) {
        while (j < sarr2.length && sarr2[j] <= sarr1[i]) {
            arr.push(sarr2[j]);
            j++
        }
        arr.push(sarr1[i]);
        i++
    }
    while (j < sarr2.length) {
        arr.push(sarr2[j]);
        j++;
    }
    return arr;
}

// Professor's solution -- a little clearer if longer
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    // while loop until one or the other runs out
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    // Continue whichever array is left
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// My solution
function mergeSortByMe(arr) {
    if (arr.length <= 1) return arr;
    let half = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half)));
}

// Professor's solution
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let half = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));
    return merge(left, right);
}

mergeSort([-3,0,14,82,90,4,20,22,40,80]);
