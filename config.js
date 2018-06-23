const fs = require('fs')
module.exports = {
    debug: true,
    dataStr20: fs.readFileSync('data/data_20.json'),
    dataStr: fs.readFileSync('data/data_1w.json'),
    data: JSON.parse(fs.readFileSync('data/data_1w.json')).data,
    debugTime: function (str, type) {
        switch (type) {
            case 1:
                console.time(str);
                break;
            case 2:
                console.timeEnd(str);
                break;
        }

    }
}