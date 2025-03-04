// Find the max count of consecutive 1ʼs in an array

//input [1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]

//output = 3

//method 1

function consecutive1s(array) {
    let count = 0;
    let maxCount = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            count += 1
            maxCount.push(count)
        }
        else {
            count = 0
        }
    }
    return Math.max(...maxCount)
}
console.log(consecutive1s([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]))

//method 2

function consecutive1s2(array) {
    let count = 0;
    let maxCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            count += 1
           maxCount = Math.max(count,maxCount)
        }
        else {
            count = 0
        }
    }
    return maxCount
}
console.log(consecutive1s2([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]))