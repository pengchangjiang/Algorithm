const config = require('../config.js');
var arr = config.data;
function heapSort(array) {
    //建堆
    var heapSize = array.length, temp;
    for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(array, i, heapSize);
    }
    //堆排序
    for (var j = heapSize - 1; j >= 1; j--) {
        temp = array[0];
        array[0] = array[j];
        array[j] = temp;
        // console.log(array)
        heapify(array, 0, --heapSize);
    }
    return array;
}
function heapify(arr, x, len) {
    var l = 2 * x + 1, r = 2 * x + 2, largest = x, temp;
    if (l < len && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < len && arr[r] > arr[largest]) {
        largest = r;
    }
    if (largest != x) {
        temp = arr[x];
        arr[x] = arr[largest];
        arr[largest] = temp;
        // console.log(arr)
        heapify(arr, largest, len);
    }
}

if (config.debug) config.debugTime('heapSort', 1);
heapSort(arr);
if (config.debug) config.debugTime('heapSort', 2);
