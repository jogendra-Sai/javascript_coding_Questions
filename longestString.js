function longestWord(str){
   return str.split(" ").reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;
    }, "");
}


console.log(longestWord("Hi Iam Jogendra SaiBabuuu"))
