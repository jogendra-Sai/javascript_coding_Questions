
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

//Remove Duplictates from string
function removeDuplicates(str){
    let newString=[];
    for(let i = 0; i < str.length; i++){
          if(!newString.includes(str[i])){
              newString.push(str[i])
          }
    }
    return newString.join("");
}

console.log(removeDuplicates("ammaanna"))

//Capitalize the First Letter of the string

function ToUpperCase(str){
    return str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}

console.log(ToUpperCase("jogendra sai"))

//console.log(compressString('aabcccccaaa')); // Output: 'a2b1c5a3'

function compressString(str){
    let compressStr = "";
    let count = 1;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++
        }else{
             compressStr += str[i] + count;
             count = 1;
        }
       
    }
    return compressStr.length < str.length ? compressStr : str;
}

console.log(compressString('ddddddffrrrf'))

function groupAnagrams(words){
    let anagramGroups = {};
    for(let word of words){
        const splitedWord = word.split("").sort().join();
        if(!anagramGroups[splitedWord]){
            anagramGroups[splitedWord] = [];
        }
        anagramGroups[splitedWord].push(word)
    }
    return Object.values(anagramGroups)
}


console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
