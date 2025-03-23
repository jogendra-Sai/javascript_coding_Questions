// given array [3,4,5] output = [20,15,12]   product of 2 nums

function product(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    // 2 < 2
    const nextIndex = (i + 1) % array.length;
    const nextnextIndex = (i + 2) % array.length;
    result.push(array[nextIndex] * array[nextnextIndex]);
  }
  return result;
}
console.log(product([3, 4, 5]));
