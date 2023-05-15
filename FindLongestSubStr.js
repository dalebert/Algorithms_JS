/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the
longest substring with all distinct characters.

Time Complexity - O(n)

Steps:
1) Increment j until a letter repeats or you reach the end
2) On a repeat: Compare the difference between j and I not counting j
    * If that's longer than longest, set longest to that length
    * Increment i while removing letters until past the repeating letter (j)
    * Back to step 1 until you reach the end
3) At the end see if i to the end is the longest so far and update if so
*/

function findLongestSubstring(str) {
    // add whatever parameters you deem necessary - good luck!
    var longest = (str.length > 0 ? 1 : 0);
    var i = 0;
    var letters = {};
    for (var j = 0; j < str.length; j++) {
        letters[str[j]] = (letters[str[j]] || 0) + 1
        if (letters[str[j]] > 1) {
            longest = Math.max(longest,j-i)
            while (letters[str[i]] != letters[str[j]]) {
                letters[str[i]] -= 1
                i++
            }
            letters[str[i]] -= 1
            i++ // Go one more past the duplicate letter
        }
    }
    longest = Math.max(longest,j-i);
    return longest
}

//findLongestSubstring('') // 0
//findLongestSubstring('rithmschool') // 7
//findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
//findLongestSubstring('bbbbbb') // 1
//findLongestSubstring('longestsubstring') // 8
//findLongestSubstring('thisishowwedoit') // 6
