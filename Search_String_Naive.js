/*
   PSEUDOCODE
* Loop over the longer string
* Loop over the shorter string
* If the characters don't match, break out of the inner Loop
* if the characters match, keep going
* If you complete the inner loop and find a match, increment the count of matches
* Return the count
*/

function naiveStrSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (long[i+j] !== short[j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count
}

naiveStrSearch("lorie loledllol", "lol")
