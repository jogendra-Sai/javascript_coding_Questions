//fibonacci series

//n = [10] fibonacci series => [0,1,1,2,3,5,8,13,21,34]

//breakdown => n <= 0 => []
    // n===1 => [0]
//sequence = [0,1]
function fibonacciSeries(num){
    if(num <= 0){
        return []
    }else if(num === 1){
        return [0]
    }
    const sequence = [0,1]
    for(let i = 2; i < num;i++){
        const nextFibnocci = sequence[i-1]+sequence[i-2]
        sequence.push(nextFibnocci)
    }
    return sequence;

}
console.log(fibonacciSeries(10))