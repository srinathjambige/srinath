function reverseWordsInSentence(sentence) {
    
    let words = sentence.split(' ');

    
    function reverseWord(word) {
        return word.split('').reverse().join('');
    }

    
    let reversedWords = words.map(reverseWord);
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log(reversedSentence);
