/*
Write a function called collectStrings which accepts an object and returns an array of all the
values in the object that have a typeof string
*/

function collectStrings(obj, arr=[]) {
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key])
        } else if (typeof obj[key] === 'object') {
            collectStrings(obj[key], arr)
        }
    }
    return arr
}

const obj23 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj23) // ["foo", "bar", "baz"])
