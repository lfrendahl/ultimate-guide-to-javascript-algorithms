/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

const e = require("express")



function reverseString(text) {
    return text.split('').reverse().join('')
}

//function reverseString(text) {
//    return [...text].reverse().join('')
//}

function alsoReverse(text) {
    let answer = ""
    for (let i=text.length -1; i >= 0 ; i--) {
    answer += (text[i])
    }
    return answer
}

//function alsoReverse(text) {
//    let answer = ''
//    for (char of text) {
//        answer = char + answer
//    }
//    return answer
//}

function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}
//
//hello
//       ello + h
//       llo + e + h 
//       lo + l + e + h
//       o + l + l + e + h
//           o + l + l + e + h

//reduce executes  a function to every element in an array until it results in a single output value. Every time concatenate the curcharacter on the front of the accumulator.
function reverseString(text) {
    return [...text].reduce((acc, curchar) => curchar + acc, '')
}


module.exports = reverseString
module.exports = alsoReverse