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
