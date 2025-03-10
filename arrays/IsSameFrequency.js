// . Create a function which will accepts two arrays arr1 and 
// arr2. The function should return true if every value in arr1 has 
// its corresponding value squared in array2. The frequency of 
// values must be same. (Effecient)
//  Inputs and outputs:
//  =============
//  [1,2,3],[4,1,9] => true
//  [1,2,3],[1,9] ==> false
//  [1,2,1],[4,4,1] ==> false (must be same frequency)


// function isSameFrequency(array1, array2) {
//     if (array1.length !== array2.length) return false;
//     return array1.every((item) => array2.includes(item * item))

// }

// console.log(isSameFrequency([1, 2, 1], [4, 4, 1]))

function isSameFrequency(array1, array2) {
    if (array1.length !== array2.length) return false;
    let arrFreq1 = {};
    let arrFreq2 = {};
    for (let val of array1) {
        arrFreq1[val] = (arrFreq1[val] || 0) + 1
    }
    for (let val of array2) {
        arrFreq2[val] = (arrFreq2[val] || 0) + 1
    }
    console.log(arrFreq1)
    console.log(arrFreq2)
    for (let key in arrFreq1) {
        if (!key * key in arrFreq2) return false;
        if (arrFreq1[key] !== arrFreq2[key * key]) {
            return false
        }

    }
    return true
}
console.log(isSameFrequency([1, 2, 1], [4, 4, 1]))