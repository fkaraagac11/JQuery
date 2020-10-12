var b = "Balik";

function bb() {
    var b = "Kus";
    return b;
}

function cc() {
    b = "Tavsan";
    return b;
}

console.log(b);
console.log(bb());
console.log(b);
console.log(cc());
console.log(b);

// OUTPUT:
// Balik
// Kus
// Balik
// Tavsan
// Tavsan

let arr = [1, 2, 4, 11];
let newArr = [];
arr.forEach((num) => {
    newArr.push(num * 2);
});
console.log(newArr);

const arr = [1, 2, 4, 11];
const newArr = [];
arr.forEach((num) => {
    newArr.push(num * 2);
});
console.log(newArr);
