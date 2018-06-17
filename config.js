const fs = require('fs')
module.exports = {
    debug: true,
    dataStr: fs.readFileSync('data/data_w.json'),
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