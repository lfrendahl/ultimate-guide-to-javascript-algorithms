/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//Looping through the array

function chunkArray(array, size) {
    let result = []
 for (value of array) {
    //Look at see what the last array that has been pushed to result is. We are looking for inner arrays
    let lastArray = result[result.length-1]
    if (!lastArray || lastArray.length == size) {
        result.push([value])
    } else {
        lastArray.push(value)
    }
 }
 return result
}



//Looping through the number of chunks: Using splice to pull premade chunks. This works because splice manipulates the array in place

function chunkArray(array,size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}


//Using slice: Extract a portion of the array without modifying it

function chunkArray(array, size) {
    let result = []
    for (let i=0; i < array.length; i += size) {
        let  chunk = array.slice(i, i+size)
        result.push(chunk)
    }
    return result
}

//Recursion - recursively slice off chunks until we run out of elements. Terminating condition at the beginning

function chunkArray(array,size) {
    if (array.length <= size) {
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}

//Every time return the first slice of 5 and the rest of the array with the recursive function called upon it
module.exports = chunkArray