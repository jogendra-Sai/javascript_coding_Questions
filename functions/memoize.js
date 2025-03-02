//Memoize function

const square = (a,b) => a+b;

function memoizeFunc(func){
    let cache = [];
    return function(...args){
        if(cache.length > 0){
            for(let i = 0; i<cache.length;i++){
                if(cache[i].a === args[0] && cache[i].b === args[1]){
                    console.log("from cache")
                    return cache[i].result
                }
            }
        }
        let result = func(...args);
        cache.push({a:args[0],b:args[1],result:result})
        console.log("From Calculation")
        return result;
    }
}




const memoize = memoizeFunc(square);

console.log(memoize(2,3))
console.log(memoize(2,3))
