function wordCount(sentence){
    const wordMap = new Map();
    const words = sentence.split(/\s+/);
    for(const word of words){
        const cleanWord = word.toLowerCase().replace(',','');
        if(cleanWord.length > 0){
            wordMap.set(cleanWord, (wordMap.get(cleanWord) || 0 +1))
        }
    }
    return wordMap;
}
const sentence = "please please submit your assignment";
const result = wordCount(sentence);
console.log(result);