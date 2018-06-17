var rn = require('random-number');

//排序算法实现
const config = {
    debug: true
}

function debugTime(str, type) {
    switch (type) {
        case 1:
            console.time(str);
            break;
        case 2:
            console.timeEnd(str);
            break;
    }

}

//冒泡排序
// var arr = //[3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var count = 1000;
var arr = [];
var op = { min: 0, max: count * 10, integer: true };
while (count > 0) { arr.push(rn(op)); count--; }
// console.log(arr.toString());
function bubbleSort(arr) {
    if (config.debug) debugTime('bubble', 1);
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if (config.debug) debugTime('bubble', 2);
    return arr;
}

function bubbleSort0(arr) {
    if (config.debug) debugTime('bubble0', 1);
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    if (config.debug) debugTime('bubble0', 2);
    return arr;
}

function bubbleSort2(arr) {
    if (config.debug) debugTime('bubble2', 1);
    var len = arr.length - 1;
    while (len > 0) {
        var pos = 0;
        for (var j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        len = pos;
    }
    if (config.debug) debugTime('bubble2', 2);
    return arr;
}

function bubbleSort3(arr) {
    if (config.debug) debugTime('bubble3', 1);
    var low = 0;
    var high = arr.length - 1;
    var temp, j;
    while (low < high) {
        for (j = low; j < high; ++j) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        --high;
        for (j = high; j > low; --j) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        ++low;
    }
    if (config.debug) debugTime('bubble3', 2);

    return arr;
}

var res;
// res = bubbleSort0(arr);
// console.log(1, res.toString());

// res = bubbleSort(arr);
// console.log(1, res.toString());

// res = bubbleSort2(arr);
// console.log(2, res.toString());

// res = bubbleSort3(arr);
// console.log(3, res.toString());