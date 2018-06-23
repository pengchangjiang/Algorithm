const config = require('../config.js');
var dataStr = config.dataStr;
var arr = JSON.parse(dataStr).data;
var arr1 = JSON.parse(dataStr).data;
function quickSort(array, left, right) {

    if (left < right) {
        var x = array[right], i = left - 1, temp;
        for (var j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        // console.log(array);
        // console.log(left, i);
        quickSort(array, left, i - 1);
        // console.log(array)
        // console.log(i, right)
        quickSort(array, i + 1, right);
    }

    // console.log(array)
    return array;
}

var quickSort2 = function (arr) {

    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    // console.log(pivot)
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort2(left).concat([pivot], quickSort2(right));
};
if (config.debug) config.debugTime('quickSort', 1);
var res = quickSort(arr, 0, arr.length - 1);
if (config.debug) config.debugTime('quickSort', 2);
console.log(res)

if (config.debug) config.debugTime('quickSort2', 1);
quickSort2(arr1, 0, arr1.length - 1);
if (config.debug) config.debugTime('quickSort2', 2);