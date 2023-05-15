/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst (arr) {
    function capitalizeStr(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    if (arr.length === 1) return [capitalizeStr(arr[0])];
    return [capitalizeStr(arr.shift())].concat(capitalizeFirst(arr))
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
// capitalizeFirst(['car']); // ['Car']
