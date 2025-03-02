
const memoizedFun = (func) =>{
    let cache = {};
   
    return (...args) => {
        const key = JSON.stringify(args);
        if(!cache[key]){
            console.log("calculating newly")
            cache[key] = func(...args);
            console.log("cache",cache)
        }
            return cache[key]
    } 
}
const square = (n) => n*n;
const memoizedresult = memoizedFun(square);

console.log(memoizedresult(2));
console.log(memoizedresult(2));
console.log(memoizedresult(4));
console.log(memoizedresult(4));
