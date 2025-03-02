//function to return smallest word in the given sentense

function smallestWord(str) {
    let wordsArray = str.split(" ")
    let smallestWord = wordsArray[0];
    for (let i = 0; i < wordsArray.length; i++) {
        if (smallestWord.length > wordsArray[i].length) {
            smallestWord = wordsArray[i]
        }
    }
    return smallestWord
}

console.log(smallestWord("Hi Sai how are ulo k"))