
const config = require('./config.js');

var dataStr = config.dataStr;
var arr = JSON.parse(dataStr).data;

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    if (config.debug) config.debugTime('selection', 1);
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    if (config.debug) config.debugTime('selection', 2);
    return arr;
}

var res = selectionSort(arr);