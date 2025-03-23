const input = "abbcccddddeea";
 
// // Outputs: 1a2b3c4d2e1a
function encodeString(input){
    let compressedStr = "";
    let count = 1;
    for(let i = 0; i < input.length;i++){
        if(input[i] === input[i+1]){
            count++
        }
        else{
            compressedStr += count + input[i]
            count = 1
        }
    }
    return compressedStr
}


const output = encodeString(input);
console.log(output); 