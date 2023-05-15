/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object
which may contain nested objects.
*/

// If the arg is an int
    // If the arg is even, return it
    // Else return 0
// Else return result of recursive call on first embedded obj + recursive call on remaining objs

/* My original non-working solution
function nestedEvenSum (arg) {
    console.log(arg)
    if (Array.isArray(arg)) {
        if (arg.length === 1)
            return nestedEvenSum(arg[0]);
        return nestedEvenSum(arg.shift()) + nestedEvenSum(arg);
    }
    if (typeof arg === 'object') {
        vals = Object.values(arg);
        if (vals.length === 1)
            return nestedEvenSum(vals[0]);
        return nestedEvenSum(vals.shift()) + nestedEvenSum(vals);
    }
    if ((typeof arg === 'number') && (arg % 2 === 0))
        return arg;
    return 0;
}
*/

// Professor's solution (which seems less recursive)
function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
