function characterCount(str) {
    let charFrequency = {};
    for (let val of str) {
        charFrequency[val] = (charFrequency[val] || 0) + 1
    }
    return charFrequency
}
console.log(characterCount("hello"))