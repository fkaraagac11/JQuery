//function type for solution 1
//let arr = [3, 1, 2, 4, 3, 1, 2, 11];
function mergeAndSortArrays(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] == arr[j]) {
                console.log(`The first repeted number is ${arr[j]}`);
                break;
            } else {
                console.log("no repetation in array");
            }
        }
    }
    return arr3;
}

mergeAndSortArrays([124, 36, 17, 36, 99, 133, 244, 155, 99]);

console.log(arr);
