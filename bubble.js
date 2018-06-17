
var fs = require('fs')
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
var dataStr = fs.readFileSync('data/data_w.json');
var arr0 = JSON.parse(dataStr).data;
var arr = JSON.parse(dataStr).data;
var arr2 = JSON.parse(dataStr).data;
var arr3 = JSON.parse(dataStr).data;

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
bubbleSort0(arr0);//16.190425999462605ms
bubbleSort(arr);//8.961947001516819ms
bubbleSort2(arr2);//8.522971004247665ms
bubbleSort3(arr3);//9.308738999068737ms
// res = bubbleSort0(arr);//首次启动运行：24.384653002023697ms，第二次运行：5.7681500017642975ms
// console.log(1, res.toString());

// res = bubbleSort(arr);//78.68115899711847ms  56.05484999716282ms
// console.log(1, res.toString());

// res = bubbleSort2(arr);//22.335119999945164ms,  0.07852800190448761ms
// console.log(2, res.toString());

// res = bubbleSort3(arr);//26.442476995289326ms  3.8210460022091866ms
// console.log(3, res.toString());