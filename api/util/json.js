const hx = require("hbuilderx");
const path = require("path");

class handleJson {
    constructor() {
        this.testfile = path.join(__dirname, 'test.json');
    }

    async read() {
        let result = hx.util.readJSONValue(this.testfile, '.version');
        result.then((data) => {
            console.log(data)
        });
    }

    async write() {
        let result = hx.util.writeJSONValue(this.testfile, '.version', '2.0.0');
        result.then((data) => {
            console.log(data)
        });
    }

    async main() {
        console.log('------------- json file path is: ', this.testfile)
        await this.read();
        await this.write();
    }
}

module.exports = handleJson;
