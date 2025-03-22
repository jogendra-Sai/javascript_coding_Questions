// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let a = 2,b=3

console.log("a = ",a , "b = ",b)

a =  a+b;
b = a - b;
a = a - b
console.log(a,b)

//1 is neither prime nor composite
//Divisible by 1 and itself

function checkPrimeNumber(n){
    if(n  <= 1){
        return false
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}
console.log(checkPrimeNumber(6))

//Factorial

function factorial(num){
   if (num <= 1){
       return 1
   }
   return num*factorial(num-1)
}

console.log(factorial(3))

//aertdsdfsdsd
//count owels and consonents

//aeiou

function getVowels(str){
    let vowelList = ["a","e","i","o","u"]
    let vowelCount = 0;
    let consonents = 0;
    for(let i = 0; i < str.length; i++){
        if(vowelList.includes(str[i])){
            vowelCount++
        }
    }
    return {vowelCount,consonents:str.length-vowelCount}
}

console.log(getVowels("aeiousrt"))