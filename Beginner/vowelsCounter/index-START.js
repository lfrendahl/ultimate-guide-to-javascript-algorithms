/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//Iteratrive Approach
function vowelsCounter(text) {
    const vowels = 'aeiou'
    let count = 0
    for (letter of text.toLowercase()) {
        if (vowels.includes(letter)) {
            count ++
        }
    }
    return count
}

//Iterative 2
function vowelsCounter2(text) {
    const vowels = 'aeiou'
    return [...text].filter(elem => vowels.includes(elem)).length + 1
}

//Regex approach
function vowelsCounter3(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {    
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}

module.exports = vowelsCounter;
