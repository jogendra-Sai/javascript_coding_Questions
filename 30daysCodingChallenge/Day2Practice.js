//Day-2

function reverseString(str){
    let output = ""
    for(let i = str.length-1; i >= 0 ; i--){
        output += str[i]
    }
    return output
}

console.log(reverseString("jogendrasai"))


function largestNuminArray(array){
    return Math.max(...array)
}
console.log(largestNuminArray([23,45,69,-45,67,34]))

function fibnocciSeries(n){
    if(n <= 0){
        return []
    }
    else if(n === 1){
        return [0]
    }
    let sequence = [0,1]
    for(let i = 2; i < n; i++){
       const next = sequence[i-1]+sequence[i-2]
       sequence.push(next)
    }
    return sequence
}
console.log(fibnocciSeries(11))


function checkEvenOdd(n){
    if(n % 2 === 0){
        return "even"
    }
    return "odd"
}
console.log(checkEvenOdd(1))

function converttoTitleCase(str){
    let splitedWord = str.split(" ");
    return splitedWord.map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
console.log(converttoTitleCase("hello world, welcome to programming!"))
