function fibnociSequence(n){
    let series = [0,1];
    
    for(let i=2;i<n;i++){
        series.push(series[i-1]+series[i-2])
    }
    
   console.log(series)
}
console.log(fibnociSequence(10))
