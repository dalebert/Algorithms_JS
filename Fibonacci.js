/*
Write a recursive function called fib which accepts a number and returns the nth number in the
Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers
1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal
to the sum of the previous two numbers.
*/

// Simple Recursion (VERY SLOW)
function fib(num) {
    // add whatever parameters you deem necessary - good luck!
    // if ((num === 1) || (num === 2)) return 1;
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2)
}

// Memoization
function fibm(num, memo=[undefined,1,1]) {
    if (memo[num] !== undefined) return memo[num];
    memo[num] = fibm(n-2, memo) + fibm(n-1, memo);
    return memo[num];
}

// Tabulation -- doesn't require recursion
function fibt(num) {
    ans = [undefined, 1, 1];
    for (let i = 3; i <= num; i++) ans.push(ans[i-2] + ans[i-1]);
    return ans[num];
}

fibonacci(100)
