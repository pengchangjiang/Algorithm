
const config = require('../config.js');

var dataStr = config.dataStr;
var arr = JSON.parse(dataStr).data;

function insertionSort(arr) {
    if (config.debug) config.debugTime('insertion', 1);
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    if (config.debug) config.debugTime('insertion', 2);
    return arr;
}
insertionSort(arr);