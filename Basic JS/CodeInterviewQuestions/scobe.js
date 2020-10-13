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

function a() {
    let a = "hello";
    console.log(a);
}

console.log(a);
