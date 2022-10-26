/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  return text.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
}

function capSentence(text) {
  return text.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}


function capSentence(text) {
  return text.split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ')
}



module.exports = capSentence