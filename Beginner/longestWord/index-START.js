/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//Get ready to loop through checking and comparing the max length and recording the resulting word.
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i=0; i <wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length 
            result = wordArray[i]
        }
    }
    return result
}


function longestWord(text) {
    let answer = text.split(' ')
    let lengthArr = text.split(' ').map(word => word.length)
    let location = Math.max(...lengthArr)
    let arrayPosition = lengthArr.indexOf(location)
    return answer[arrayPosition]
}

function longestWord(text) {
  var result = text.split(' ').reduce((acc, cur) => {
    if (cur.length > acc.length) {
        return cur
    } else {
        return acc
    }, '')
    return result
  } 

  //Sorting by word length
  function longestWord(text) {
    let sorted = text.split(' ').sort((a, b) => b.length - a.length)
    return sorted[0]
    } 



module.exports = longestWord