// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. 
// Merge them and sort [0,3,4,4,6,30,31] ?


function sortedData(array1, array2) {
    return array1.concat(array2).sort((a, b) => a - b)

}

console.log(sortedData([0, 3, 4, 31], [4, 6, 30]))