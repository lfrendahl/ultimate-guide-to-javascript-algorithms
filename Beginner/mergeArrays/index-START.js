/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//Take in a random number of arrays using the REST PARAMETERS. Create a place for your joined arrays. Then loop through all the arrays put in using the forEAch method, and for every new array, spread what is already there and spread what is going in. At the end rturn a newSet (turned into an array) of the current array). This will remove duplicates.
function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]

    
}


//Using reduce: The reduce method executes a given function in every element withing an array until a final value is arrived at. It accepts a function and the initial value of the accumulator.

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
//if the current includes the newitem, leave it as is. If the current does not, then add it to the current with spread. Start the current array off as a blank array and at the end of the function, set the answer as 'uniquearray'
    const uniqueArray = jointArray.reduce((newArray, item) => {
        if (newArray.includes(item)) {
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

//Using filter:
function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
//find the first index of this item/ If it is not the current index then don't take it. This way we only take the first of each item.
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item === index))
    
    return uniqueArray

}


module.exports = mergeArrays