const input = "Every developer likes to mix kubernetes and javascript";

const numeronyms = input.split(" ").map((word)=>{
    if(word.length >= 4){
        return word[0] + (word.length - 2) + word[word.length-1];
    }
    return word;
}).join(" ")

console.log(numeronyms)

//E3y d7r l3s to mix k8s and j8t
