function reverseString(str){
    let splitArray = str.split(" ");
   let reverseArray = [];
    for (let i = splitArray.length - 1; i >= 0; i--) {
    reverseArray.push(splitArray[i]);
}
   return reverseArray.join(" ")
}

console.log(reverseString("Hello Iam Jogendra"))
