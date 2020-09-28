const textBucket = document.querySelectorAll("[attr]");
const inputBox = document.querySelector("[int]");
console.log(textBucket);
textBucket.forEach((element) => {
    element.innerHTML = "Heeey";
});

// element.addEventListener("keyup", (event) => {
//     if (event.keyCode === 13) {
//         textBucket.innerHTML = "Bye";
//     }
// });
