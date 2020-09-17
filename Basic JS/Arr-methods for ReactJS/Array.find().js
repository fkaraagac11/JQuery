const array1 = [5, 11, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 11
// const array1 = [5, 11, 12, 8, 130, 44];
// const array2= array1.find((element)=>element > 10)
// console.log(array2)

const array1 = [5, 11, 12, 8, 130, 44];
const array2 = array1.filter((element) => element > 10);
console.log(array2);
