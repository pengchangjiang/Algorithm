

const config = require('../config.js');
var arr = config.data;
function binaryInsertionSort(arr) {
    if (config.debug) config.debugTime('binaryInsertion', 1);

    for (var i = 1, len = arr.length; i < len; i++) {
        var key = arr[i], left = 0, right = i - 1;
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (var j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    if (config.debug) config.debugTime('binaryInsertion', 2);
    return arr;
}
binaryInsertionSort(arr);
