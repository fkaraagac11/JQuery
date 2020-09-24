// const wizard = {
//     name: "Merlin",
//     health: 100,
//     heal: function (num1, num2) {
//         this.health += num1 + num2;
//     },
// };

// const archer = {
//     name: "Robin Hood",
//     health: 50,
// };

// wizard.heal.call(archer, 50, 60);
// wizard.heal.apply(archer, [20, 30]);
// archer;
// // function borrowing

// const healArcher = wizard.heal.bind(archer, 50, 60);
// console.log(archer);
// healArcher();
// console.log(archer);

// const array = [1, 2, 3];

// function getMaxNumber(array) {
//     if (array[0] > array[1]) {
//         if (array[0] > array[2]) {
//             console.log(array[0] + " is the biggest");
//         }
//     } else if (array[1] > array[2]) {
//         console.log(array[1] + " is the biggest");
//     } else {
//         console.log(array[2] + " is the biggest");
//     }
// }

// getMaxNumber([33, 4, 7]);

// const array = [1, 32, 3, 66, 67];

// // in this case, the 'this' keyword doesn't matter!
// function getMaxNumber(arr) {
//     return Math.max.apply(null, arr);
// }

// console.log(getMaxNumber(array));

// const bigInt = 1234567890123456789012345678901234567890n;

// console.log(bigInt);

false == ""; //true
false == []; //true
false == {}; //true
"" == 0; //true
"" == [];
"" == {};
0 == [];
0 == {};
0 == null;
