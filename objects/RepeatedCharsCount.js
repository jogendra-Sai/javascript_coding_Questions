// Find the repeated chars count and index

const array = [1,3,4,5,6,3,5]

let result = [];
let obj = {};

function getRepeatedChars(){
    function item(array,value){
        let count = array.filter((item)=>item === value).length
        let index = array.indexOf(value)
        
        return {count,index}
    }
    for(let i = 0;i<array.length;i++){
        if(result.includes(array[i])){
            let {count,index} = item(array,array[i])
            obj[array[i]] = {count,index}
        }else{
            result.push(array[i])
        }
    }
    return obj
}
console.log(getRepeatedChars())
