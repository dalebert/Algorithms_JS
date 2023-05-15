function getDigit(num, digit) {
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 1;
    for (i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]));
    }
    return max;
}

function radixSort(nums) {
    let maxDigits = mostDigits(nums);
    console.log(maxDigits);
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums
}

// getDigit(1534, 3);

// digitCount(153433);

//mostDigits([1, 22, 333, 4444, 99, 4])

radixSort([4, 232, 49, 8, 4221, 4112])
