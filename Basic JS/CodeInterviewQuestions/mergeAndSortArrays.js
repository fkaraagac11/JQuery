// FIRST SOLUTION
const arr1 = [1, 3, 6, 55];
const arr2 = [4, 7, 17, 66];

const arr3 = arr1.concat(arr2);
for (let i = 1; i < arr3.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr3[i] < arr3[j]) {
            let x = arr3[i];
            arr3[i] = arr3[j];
            arr3[j] = x;
        }
    }
}
console.log(arr3);
//function type for solution 1

function mergeAndSortArrays(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    for (let i = 1; i < arr3.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr3[i] < arr3[j]) {
                let x = arr3[i];
                arr3[i] = arr3[j];
                arr3[j] = x;
            }
        }
    }
    return arr3;
}

mergeAndSortArrays([124, 36, 17, 99], [133, 244, 155, 99]);

console.log(arr3);

// SECOND SOLUTION
function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        if (array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
