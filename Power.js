/*
Write a function called power which accepts a base and an exponent. The function should return the
power of the base to the exponent. This function should mimic the functionality of Math.pow()
Do not worry about negative bases and exponents.
*/

function power(base, exp) {
    if (exp === 0) return 1; // base case
    return base * power(base, exp - 1)
}

power(2,8)
