// Add your functions here
const sourceArray = [1, 2, 3, -9]

function map(sourceArray, fn) {
     return sourceArray.map(i => fn(i))
 }

 map([1, 2, 3, -9], function(a){ return a * a }) //=> [1, 4, 9, 81] 


function reduce(arr, fn, start) {
    let result = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1;

    for (; i < arr.length; i++) {
        result = fn(arr[i], result);
    }

    return result;
}