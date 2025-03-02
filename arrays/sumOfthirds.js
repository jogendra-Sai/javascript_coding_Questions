// Write a function sumOfThirds(arr), which takes an 
// array arr as an argument. This function should return a sum of 
// every third number in the array, starting from the first one
// 𝐃𝐢𝐫𝐞𝐜𝐭𝐢𝐨𝐧𝐬:
// If the input array is empty or contains less than 3 numbers then return 0.
// The input array will contain only numbers.
function sumOfThirds(arr) {
    let sum = 0;
    if(arr.length < 3) return 0
    for (let i = 0; i < arr.length; i += 3) {
        console.log(arr[i])
        sum += arr[i]
    }
    return sum
}
console.log(sumOfThirds([1, 3, 4, 5,6,3,6]))