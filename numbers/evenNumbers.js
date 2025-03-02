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