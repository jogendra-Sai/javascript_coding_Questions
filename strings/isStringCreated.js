// Given two strings. Find if one string can be formed by 
// rearranging the letters of other string.  (Effecient)
//  Inputs and outputs:
//  "aaz","zza" ⟹ false
// "qwerty","qeywrt" ⟹ true

function isSameFrequency(str1, str2) {
    if (str1.length !== str2.length) return false
    let str1Freq = {}
    let str2Freq = {}
    for (let val of str1) {
        str1Freq[val] = (str1Freq[val] || 0) + 1
    }
    for (let val of str2) {
        str2Freq[val] = (str2Freq[val] || 0) + 1
    }
    console.log(str1Freq, str2Freq)
    for (let val of str1) {
        if (str1Freq[val] !== str2Freq[val]) {
            return false
        }
    }
    return true
}
console.log(isSameFrequency("qwertyk", "qeywrtz"))