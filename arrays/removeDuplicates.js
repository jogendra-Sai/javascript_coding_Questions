//primitive types
//method 1
function removeDuplicates1(array){
    let uniqueArray = [];
    for(let i = 0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) == -1){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}

console.log(removeDuplicates1([1,2,2,2,4,4,6,6,7,9,9]))
//method 2
function removeDuplicates2(array){
   return [...new Set(array)]
}

console.log(removeDuplicates2([1,2,2,2,4,4,6,6,7,9,9]))

//Non-Pritive types

function removeDuplicates3(array){
    let uniqueArray=[];
    function isDuplicate(array,value){
        return array.some((item)=> JSON.stringify(item) === JSON.stringify(value))
    }
    for(let i = 0; i<array.length; i++){
        if(!isDuplicate(uniqueArray,array[i])){
            uniqueArray.push(array[i])
        }
    }
    return uniqueArray
}

console.log(removeDuplicates3([{name:"Sai",age:25},{name:"Pavan",age:25},{name:"Sai",age:25}]))