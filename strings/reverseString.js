function reverseString(str) {
    let splitArray = str.split(" ");
    let reverseArray = [];
    for (let i = splitArray.length - 1; i >= 0; i--) {
        reverseArray.push(splitArray[i]);
    }
    return reverseArray.join(" ")
}

console.log(reverseString("Hello Iam Jogendra"))

//reverse string without using inbuilt method

function reverseString1(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}

console.log(reverseString1("jogendra"))

// Write a javascript function that reverses the order of words 
// in a sentence without using the built-in reverse() method.

function reverseWords(words) {

}
console.log("Reverse words", reverseWords("Hello Jogendra how are you"))

