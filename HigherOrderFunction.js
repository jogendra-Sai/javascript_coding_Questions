const radius = [4,5,6,7];

const calculateArea = (radius) => {
    return Math.PI*radius*radius
}

const calculateCircumference = (radius) =>{
    return 2*Math.PI*radius
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log("Area",calculate(radius,calculateArea));
console.log("Circumference",calculate(radius,calculateCircumference))
