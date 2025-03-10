// Method -1 Find the largest element in the nested array

// function largestElement(array) {
//     return Math.max(...array.flat(Infinity))
//  }

// console.log(largestElement([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]));

//Method-2 (recursive thechnique)

function largestElement(array) {
    let max = Number.NEGATIVE_INFINITY;
    //Initialize max to smallest possible number
    function traverse(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                traverse(array[i])
            } else {
                if (array[i] > max) {
                    max = array[i]
                }
            }
        }
    }
    traverse(array)
    return max
}

console.log(largestElement([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]));
