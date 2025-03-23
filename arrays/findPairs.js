// Program challenge: Find the pairs from given input ?

function findPairs(inputArray, num) {
    const seen = new Set();
    const pairs = []
    for (let val of inputArray) {
        const complement = num - val;
        if (seen.has(complement)) {
            pairs.push([complement, val])
        }
        seen.add(val)
    }
    return pairs
}

console.log(findPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))