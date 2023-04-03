// Using character codes -- arguably more efficient
function isAlphaNumStr(str) {
    var code;

    for (var i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric
            !(code > 64 && code < 91) && // upper alpha
            !(code > 96 && code < 123)) { // lower alpha
                return false;
        }
    }
    return true;
}

// Using regular expressions -- possibly efficiency issues in some browsers
function isAlphaNumericRE(str) {
    return /^[a-zA-Z0-9]+$/.test(str)
}

// Using character codes on a single character
function isAlphaNum (char) {
    var code = char.charCodeAt(0); // first and only char
    if (!(code > 47 && code < 58) && // numeric
        !(code > 64 && code < 91) && // upper alpha
        !(code > 96 && code < 123)) { // lower alpha
            return false;
    }
    return true;
}

isAlphaNum('!Bob23');
