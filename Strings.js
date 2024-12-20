//String Methods
//Replace
const message = "Javascript is fun. Javascript is awesome";

console.log(message.replace("Javascript","Java")) //It will replace first occurance

console.log(message.replace(/Javascript/g,"Java")) //It will replace all the occurances

console.log(message.replace(/javascript/g,"Java")) //It will wont replace because replace is case sensitive method
console.log(message.replace(/javascript/gi,"Java")) //By usinf i in the pattern it will igonre case checking

const message2 = "My age is : 8"

console.log(message2.replace(/\d/,25)) //Pattern to match digit

//Split

const originalString = "Jogendra::is 25::years old"

console.log(originalString.split("::"))
const text2 = "JavaScript ;  Python ;C;C++";
console.log(text2.split(";")) 
let pattern = /\s*(?:;|$)\s*/; // Pattern to remove spaces and characters in the string
console.log(text2.split(pattern))


//Substring
const message3 = "Javascript is awesome language";
console.log(message3.substring(0,4)) //Here endindex will wont include
console.log(message3.substring(1,0)) //If start index is more than end index then they will swap
console.log(message3.substring(-44,90)) // Same as substring(0)

//Questions

console.log("String1" - "String2")

console.log('hello'.split(""))

//Reverse a string

let string = "Jogendra";
console.log(string.split("").reverse().join(""))

//Reversing a string without using inbuilt methods
let reversedString = "";

for(let i = string.length - 1; i >= 0;i--){
    reversedString += string[i]
}
console.log(reversedString)

//Counting vowels

function countVowels(str){
    let vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0;
}
console.log(countVowels("kkkkk"))

//Anagram Check

function anagramCheck(str1,str2){
   return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(anagramCheck("listen","silent"))
