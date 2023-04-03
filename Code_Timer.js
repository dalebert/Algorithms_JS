function addUpTo(n) {
    let total = 0;
    for (let i=1; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUp2(n) {
    return n * (n + 1) / 2;
}

var t1 = performance.now();
console.log(addUpTo(100));
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
