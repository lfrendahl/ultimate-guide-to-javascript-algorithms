/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length -1 ]
        console.log('START lastArray is ' + lastArray)
        console.log('START result is ' + result)
        
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
        console.log('END lastArray is ' + lastArray)
        console.log('END result is ' + result)
    }
    return result
}


module.exports = chunkArray