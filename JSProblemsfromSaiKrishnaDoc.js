// Problem 1: write a program to remove duplicates from an array

//primitive types
//method 1
function removeDuplicates1(array){
    let uniqueArray = [];
    for(let i = 0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) == -1){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}

console.log(removeDuplicates1([1,2,2,2,4,4,6,6,7,9,9]))
//method 2
function removeDuplicates2(array){
   return [...new Set(array)]
}

console.log(removeDuplicates2([1,2,2,2,4,4,6,6,7,9,9]))

//Non-Pritive types

function removeDuplicates3(array){
    let uniqueArray=[];
    function isDuplicate(array,value){
        return array.some((item)=> JSON.stringify(item) === JSON.stringify(value))
    }
    for(let i = 0; i<array.length; i++){
        if(!isDuplicate(uniqueArray,array[i])){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}

console.log(removeDuplicates3([{name:"Sai",age:25},{name:"Pavan",age:25},{name:"Sai",age:25}]))

//Problem 2 : Write a program to find even numbers from array

function findEvenNumbers(array){
    let evenList = [];
    for(let i = 0; i<array.length; i++){
        if(array[i]%2 === 0){
            evenList.push(array[i])
        }
    }
    return evenList
}
console.log(findEvenNumbers([1,2,3,4,5,6,78,45,67,65,88,32]))

//Problem 3 : Write a program to find whether the string is palindrome or not

function checkPalindrome(string){
    return string.split("").reverse().join("") === string ? "Palindrome" : "Not a palindrome"
}
console.log(checkPalindrome("madam"))

//Problem 4 : Write a program to find the factorial of given number

function findFactorial(num){
    return num <=1 ? 1 : num*findFactorial(num-1)
}
console.log(findFactorial(5))

//Problem 5: Write a program to find the longestWord in the given sentence
function findLongestWord(string){
    let wordsArray = string.split(" ");
    let longestWord = "";
    for(let i = 0; i < wordsArray.length; i++){
       if(wordsArray[i].length > longestWord.length) {
           longestWord = wordsArray[i]
       }
    }
    return longestWord
}

console.log(findLongestWord("Hi Iam Saikrishna Iam a UI Developerrrrr"))
