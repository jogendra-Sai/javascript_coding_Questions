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
