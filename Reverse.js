/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
    if (str.length === 1) return str;
    return str.slice(-1).concat(reverse(str.substring(0,str.length-1)))
}

// reverse('awesome') // 'emosewa'
 reverse('rithmschool') // 'loohcsmhtir'
