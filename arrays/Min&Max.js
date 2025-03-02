//Function to Calculate minimum element in the array without using inbuilt array methods
// Inorder to find max element replace Infinity with "-Infinity" and change array[1] > minValue
function minEle(){
    const array = [23,34,56,32,12]
    let minValue = Infinity
    for(let i = 0; i < array.length; i++){
        if(array[i] < minValue){
            minValue = array[i]
        }
        
    }
     return minValue
   
}

function main(array){
    console.log("Minimum element in the array " +minEle(array))
}

main();
