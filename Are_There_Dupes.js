function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
    var my_args = {}
    for (var i = 0; i < arguments.length; i++) {
        if (my_args[arguments[i]]) {
            return true
        }
        else {
            my_args[arguments[i]] = true
        }
    }
    return false
}

// Using the Set function -- not mine; the professor's. Brilliant.
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates("a", 1, "d", 4, 3, "z")
