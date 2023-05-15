function pivot(arr, start=0, end=arr.length-1) {
    let pidx = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < arr[start]) {
            pidx++;
            swap(arr, pidx, i);
        }
    }
    swap(arr, start, pidx);
    return pidx;
}

// pivot([4,8,2,1,5,7,6,3])

function quickSort(arr, start=0, end=arr.length-1) {
    if (start >= end) return arr;
    let pidx = pivot(arr, start, end);
    quickSort(arr, start, pidx-1);
    quickSort(arr, pidx+1, end);
    return arr;
}

quickSort([4,8,2,1,5,-12,7,6,14,3])
