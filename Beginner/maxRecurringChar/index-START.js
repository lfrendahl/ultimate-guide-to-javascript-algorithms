/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


//Create an object to add characters and values to. Keep track of the current character and the amount it has to compare as the running maximum. First go thorugh and add all data to the array. Then go thorough and compare.
function maxRecurringChar(text) {
    let counting = {}
    let curMaxChar = ''
    let curMaxVal = 0

    for (let char of text) {
        if (counting.hasOwnProperty(char)) {
            counting[char]++
        } else {
            counting[char] = 1
        }
    }

    for (let char in counting) {
        if (counting[char] > curMaxVal) {
                curMaxVal = counting[char]
                curMaxChar = char
        }
    }
    return curMaxChar
}

//First loop through the text and create the charMap objects with each character and value. Using the object methods, pull all the values into one array. Then pull all the counts into another array. Find the math max of the values Array. Then find the index of this value in the value array. REturn the character at the same index in the characters array. 
function maxRecurringChar(text) {
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
}



module.exports = maxRecurringChar;