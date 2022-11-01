//One consonant - move to end + ay
//Blended consonants - move to end + ay
//Vowel sound - word + way

function pigLatin(str) {
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelIndex = 0;

    if (vowels.includes(str[0])) {
        return str + 'way'
    } else {
        for (let char of string) {
            if (vowels.includes(char)) {
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
    }
}

//Declarative Approach
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
                 //first letter a vowel, everything else
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
                //One or more characters, followed by one or more vowels, the rest of the word
}