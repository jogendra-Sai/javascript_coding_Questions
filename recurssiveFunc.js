//Recursive Currying
function sum(a){
    console.log("called")
    return function(b){
        if (!b){
            return a
        }
        return sum(a+b)
    }
}

console.log(sum(1)(2)(3)(4)(5)(6)())
// sum((1)(2)(3)(4)(5)(6)(7)(8)())
