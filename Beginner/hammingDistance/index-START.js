/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



//Only run the code if the strings are the same length. Loop through and on every loop if they are not equal increment the result counter.
function hammingDistance(stringA, stringB) {
  let result = 0

  if (stringA.length == stringB.length) {

    for (let i=0; i < stringA.length; i++) {
        if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
            result++
        }
    }

  } else {
    throw new Error('Strings do not have equal length')
  }
  return result
}



module.exports = hammingDistance