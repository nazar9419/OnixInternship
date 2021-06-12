const obj = {
    a: 1,
    b: 2
};

// 1. Log count of keys in object
var len = Object.keys(obj).length;
console.log('1: ', len);

// 2. Create new object from "obj" and add to newly created param "c" with value "3".
// Original "obj" shouldn't be modified

const obj2 = Object.assign({c:3},obj);


console.log(obj); // output {a: 1, b: 2};
console.log(obj2) // should return {a: 1, b: 2, c: 3}

// 3.Check if is given input is array (Please, use more than one solution)
const input1 = 'array';
const input2 = ['array'];

function checkArray(str){
    arr = Array.isArray(str);
    arr2 = str.constructor ===Array;
    return arr, arr2;
}

console.log('3', checkArray(input2));
console.log('3.1', checkArray(input1));

// 4. Remove duplicates from array (Try to find more than one solution)
const array = ['A', 'B', 'A', 'C', 'B']; 

function removeDuplicates_ONE(data)
{
    return data.filter((value, index)=> data.indexOf(value)=== index);
    
}

function removeDuplicates_TWO(data)
{
    
    return [...new Set(data)]
}

console.log('4,1 :', removeDuplicates_ONE(array));
console.log('4,2 :', removeDuplicates_TWO(array));

// 5. Merge two arrays, also remove duplicates
const array1 = ['A', 'B', 'F', 'C', 'B']; 
const array2 = ['A', 'D', 'E', 'D', 'F']; 


function arrayMerge(arr1, arr2){
    const array3 = arr1.concat(arr2);
    return [...new Set(array3)]
}

console.log('5', arrayMerge(array1,array2));

// 6. Write function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
function yourFuncName(arr){
    var filtered = arr.filter(function (el){
        return el != null;
    });
    return filtered;
}

console.log('6: ', yourFuncName([10, null, -12, false, undefined, '', 0, 234]));

// 7. Get random item from array
function getRandom(arr){
    var randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem;
}

console.log('7:', getRandom([10, 22, 'Super', null, undefined, 0, false, 111]));

// 8. Sort the array in the ascending order
function sort(arr){
    return arr.sort();
}

console.log('8: ', sort([11, 21, 13, 88, 2, 4, 77]));

/** 9. Get sorted array from 8 task, and write function, that creates object: 
 * {
 *     even: [88, 2, 4],
 *     odd: [11, 21, 13, 77]
 * }
 *  */ 

//console.log('9: ',  yourFuncName(***));
