const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];

const result = students.map((student)=>{
    const sum = student.scores.reduce((acc,curr)=>acc+curr,0)
    return {name:student.name,scores:student.scores,average:sum/student.scores.length}
}).filter(topper=>topper.average > 90)
console.log(result)


const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const productsByCategory = products.reduce((acc,product)=>{
    const category = product.category;
    if(!acc[category]){
       acc[category] = []; 
    }
    acc[category].push(product);
    return acc;
}, {});
console.log(productsByCategory)
const avgPriceByCategory = Object.keys(productsByCategory).map(category=>{
    const sum = productsByCategory[category].reduce((acc,curr)=>acc+curr.price,0);
    return {category:category,average:sum/productsByCategory[category].length}
})
console.log(avgPriceByCategory)




const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

const employeesBydepartment = employees.reduce((acc,emp)=>{
    const department = emp.department;
    if(!acc[department]){
        acc[department]=[];
    }
    acc[department].push(emp)
    return acc;
},{})

console.log(employeesBydepartment)

const avgSalaryBydept = Object.keys(employeesBydepartment).map(department=>{
    const sum = employeesBydepartment[department].reduce((acc,curr)=>acc+curr.salary,0)
    return {department:department,average:Math.round(sum/employeesBydepartment[department].length)}
})
const output = avgSalaryBydept.filter(item=>item.average > 65000)
console.log(output)






var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

  const votesData = voters.map((item)=> {
      let wholeData = {}
      if(item.age >= 18 && item.age <= 25){
          return {...item,category:"YoungPeople"};
      }else if(item.age >= 26 && item.age <= 35) {
           return {...item,category:"MidsPeople"};
      }
      else{
           return {...item,category:"OldPeople"};
      }
  }).reduce((acc,curr) => {
      const category = curr.category;
      if(!acc[category]){
          acc[category] = [];
      }
      acc[category].push(curr)
      return acc;
  },{})


console.log(votesData);
const avg = Object.keys(votesData).map((category) => {
   if(category === "YoungPeople"){
       return {numYoungPeople:votesData[category].length,numYoungVotes:votesData[category].filter((item)=>item.voted === true).length}
    }else if(category === "MidsPeople"){
        return {numMidsPeople:votesData[category].length,numMidVotesPeople:votesData[category].filter((item)=>item.voted === true).length}
    }else{
         return {numOldsPeople:votesData[category].length,numOldVotesPeople:votesData[category].filter((item)=>item.voted === true).length}
    }
}).reduce((acc,obj)=>{
    return {...acc,...obj}
},{})
console.log(avg)


// if(category === "YoungPeople"){
//         const obj = {numYoungPeople:voterResults[category].length,numYoungVotes:voterResults[category].filter((item)=>item.voted === true)}
//         return obj
//     }
// Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
