//Function to remove object duplicates from array

let x=[{a:2,b:3},{a:3,b:4},{a:2,b:3}]

let result = [];
function isDuplicate(array,value){
    return array.some((item)=> JSON.stringify(item) === JSON.stringify(value))
}
for(let i = 0; i < x.length; i++){
  if(!isDuplicate(result,x[i])){
      result.push(x[i])
  }
}
console.log(result)
