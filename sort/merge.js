const config = require('../config.js');
var arr = config.data;
//没看明白
function mergeSort(arr) { //采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    var res = merge(mergeSort(left), mergeSort(right));
    return res;
}

function merge(left, right) {

    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

if (config.debug) config.debugTime('mergeSort', 1);
mergeSort(arr);
if (config.debug) config.debugTime('mergeSort', 2);