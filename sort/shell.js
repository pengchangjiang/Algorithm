const config = require('../config.js');
var arr = config.data;
function shellSort(arr) {
    if (config.debug) config.debugTime('shell', 1);
    var len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 5) { //动态定义间隔序列
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    if (config.debug) config.debugTime('shell', 2);
    return arr;
}
shellSort(arr);