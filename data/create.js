var rn = require('random-number');
var fs = require('fs');

var count = 10000;
var arr = [];
var op = { min: 0, max: count * 10, integer: true };
while (count > 0) { arr.push(rn(op)); count--; }
var data = { data: arr };
fs.writeFile('data/data_w.json', JSON.stringify(data), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('成功');
    }

});