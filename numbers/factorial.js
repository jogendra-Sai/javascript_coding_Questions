//Problem 4 : Write a program to find the factorial of given number

function findFactorial(num){
    return num <=1 ? 1 : num*findFactorial(num-1)
}
console.log(findFactorial(5))