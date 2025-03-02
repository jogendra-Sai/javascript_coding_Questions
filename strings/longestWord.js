//Problem 5: Write a program to find the longestWord in the given sentence
function findLongestWord(string) {
    let wordsArray = string.split(" ");
    let longestWord = "";
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i]
        }
    }
    return longestWord
}

console.log(findLongestWord("Hi Iam Saikrishna Iam a UI Developerrrrr"))