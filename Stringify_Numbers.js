/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which
are numbers and converts them to strings. Recursion would be a great way to solve this!
*/

function stringifyNumbers(obj, new_obj={}) {
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            new_obj[key] = obj[key].toString()
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            new_obj[key] = stringifyNumbers(obj[key])
        }
        else {
            new_obj[key] = obj[key]
        }
    }
    return new_obj
}


let obj = {
    num: 1,
    test: [],
    str: 22,
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

stringifyNumbers(obj)
