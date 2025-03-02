//Declaring an array

let array = [];
console.log(array);

let person = {
  name: "John",
  age: 23,
  gender: "male",
};

let personArray = ["Employee", 23, person];
console.log(personArray);

//Accessing array elements
console.log(personArray[2].name);

//Array length
console.log(personArray.length);

//Array - Add and Remove elements
personArray.push("Software Engineer");
console.log(personArray);

personArray.pop();
console.log(personArray);

//Add an element at top of the array
personArray.unshift("Software Engineer");
console.log("unshift", personArray);

//Remove an element from top of the array
personArray.shift();
console.log("shift", personArray);

//Loop through an array

for (let i = 0; i < personArray.length; i++) {
  console.log(personArray[i]);
}

//Inbuilt array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.map((item, index, array) => {
  console.log(item, index, array);
});

const newNums = numbers.filter((item) => item % 2 !== 0);
console.log(newNums);

const sum = numbers.reduce((acc, item) => {
  return acc + item;
}, 2);
console.log(sum);

//Some in Javascript(it will check if any of the elements in the array satisfies the condition)
const newNumbers = [1, 3, 5, 7, 9, 10];
const isEven = newNumbers.some((item) => item % 2 === 0);
console.log(isEven);

//Every in Javascript(it will check if all the elements in the array satisfies the condition)
const isAllEven = newNumbers.every((item) => item % 2 === 0);
console.log(isAllEven);

//find in Javascript(it will return the first element that satisfies the condition)
const found = newNumbers.find((item) => item % 2 === 0);
console.log(found);

//Spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log([...arr1, ...arr2]);

//Rest operator
const [first, second, ...rest] = arr1;
console.log(first, second, rest);

function restOperator(...args) {
  return args;
}
console.log(restOperator(arr1, arr2, "Rolex"));

//Slice (it will return a new array with the elements from the start index to end index)
//The first argument is the start index and the second argument is the end index

const slicedArray = arr1.slice(1, 3);
console.log(slicedArray);

//Original array is not changed
console.log(arr1);

//Splice (it will remove the elements from the start index to end index and return the removed elements)
//It will also modify the original array
//The first argument is the start index, the second argument is the number of elements to be removed and the rest of the arguments are the elements to be added
const splicedArray = arr1.splice(1, 3, "Rolex");
console.log(splicedArray);
console.log(arr1);

//Fill (it will fill the array with the given value from the start index to end index)
//The first argument is the value to be filled, the second argument is the start index and the third argument is the end index
const dummyArray = [1, 2, 3, 4, 5];
const filledArray = dummyArray.fill(10, 1, 3);
console.log(filledArray);

//findIndex (it will return the index of the first element that satisfies the condition)
const index = dummyArray.findIndex((item) => item % 2 === 0);
console.log(index);

//Flat (it will flatten the array)
const nestedArray = [1, 2, [3, 4, [5, [7, 8], 6]]];
const flatArray = nestedArray.flat(3);
console.log(flatArray);

//Reverse (it will reverse the array)
const reversedArray = dummyArray.reverse();
console.log(reversedArray);

//sort (it will sort the array)

const unsortedArray = [1, 3, 2, 5, 4];
const sortedArray = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray);
const sortedArrayDesc = unsortedArray.sort((a, b) => b - a);
console.log(sortedArrayDesc);

//Find the second largest element in an array
const givenArray = [1, 34, 678, 543, 543, 898];
function secondLargest(array) {
  const uniqueArray = Array.from(new Set(array));
  const sortedArray = uniqueArray.sort((a, b) => b - a);
  console.log(sortedArray);
  if (sortedArray.length >= 2) return console.log(sortedArray[1]);
  else return -1;
}

secondLargest(givenArray);
