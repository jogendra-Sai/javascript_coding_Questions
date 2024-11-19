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
