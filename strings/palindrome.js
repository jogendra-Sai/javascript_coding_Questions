//Problem 3 : Write a program to find whether the string is palindrome or not

function checkPalindrome(string){
    return string.split("").reverse().join("") === string ? "Palindrome" : "Not a palindrome"
}
console.log(checkPalindrome("madam"))