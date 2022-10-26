/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

//Not the best becauase it has to run two loops
function palindromeChecker(text) {
    let reversedText = text.toLowerCase().split('').reverse().join('')
    return (reversedText === text.toLowerCase())
}


//We check the character array. Is every letter at an index equal to the letter at that negative index? To find the negative for 0 it is -1 and for 1 it is -2, so we adjust this in our function.
function palindromeChecker(text) {
 let charArray = text.toLowerCase().split('')

 let result = charArray.every((letter, index) => {
    return letter === charArray[charArray.length - 1 - index]
 })

 return result

}

//We only need to loop halfway through 
function palindromeChecker(text) {


    for (let i=0; i < text.length/2; i++) {
       if (text[i] !== text[text.length -1 - i]) {
        return false
       }
       return true
    }
   }
   






module.exports = palindromeChecker;