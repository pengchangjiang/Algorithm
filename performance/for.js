
const arr = require('../config.js').data;

function test(arr) {
    console.time("kk");
    for (var i = 0; i < arr.length; i++) {
        var k = arr[i];
    }
    console.timeEnd("kk");
}
function test2(arr) {
    console.time("kk2");
    for (var i = 0, len = arr.length; i < len; i++) {
        var k = arr[i];
    }
    console.timeEnd("kk2");
}
function test3(arr) {
    console.time("kk3");
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var k = arr[i];
    }
    console.timeEnd("kk3");
}
function test4(arr) {
    console.time("kk4");
    var val;
    for (var i = 0; val; val = arr[i++]) {
        var k = arr[i];
    }
    console.timeEnd("kk4");
}
test(arr);
test2(arr);
test3(arr);
test4(arr);

function test5(arr) {
    console.time("kk5");
    var val;
    var newArr = [];
    for (var i = 0; val; val = arr[i++]) {
        newArr.push(arr[i]);
    }
    console.timeEnd("kk5");
}

function test6(arr) {
    console.time("kk6");
    var val;
    var newArr = [];
    for (var i = 0; val; val = arr[i++]) {
        newArr[newArr.length] = arr[i];
    }
    console.timeEnd("kk6");
}

// test5(arr);
// test6(arr);