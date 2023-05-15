function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Naive version without optimization
function bubbleSortNaive(arr) {
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    return arr;
}

// Optimized
function bubbleSortOpt(arr) {
    for (var i = arr.length; i > 0; i--)
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) swap(arr, j, j+1);
        }
    return arr;
}

// Further optimized to stop when done
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

// bubbleSort([37,45,29,8,12,88,-3]);
bubbleSort([8,1,2,3,4,5,6,7]);
