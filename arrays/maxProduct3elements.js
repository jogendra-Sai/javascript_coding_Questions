// const array = [-10,-10,4,5,7]

const array = [2,3,5,6,4]
const sortedArray = array.sort((a,b)=>a-b)

const set1 = sortedArray[0]*sortedArray[1]*sortedArray[array.length-1] //set checks for negative case
const set2 = sortedArray[array.length-1]*sortedArray[array.length-2]*sortedArray[array.length-3] //set checks for positive case

console.log(Math.max(set1,set2))