const hx = require("hbuilderx");
const path = require("path");

class handleJson {
    constructor() {
        this.testfile = path.join(__dirname, 'test.json');
        // this.testfile = 'C:/Users/Administrator/AppData/Roaming/HBuilder X/user/settings.json';
    }

    async read() {
        try{
            let result = hx.util.readJSONValue(this.testfile, '.list[0]');
            result.then((data) => {
                console.log("----读取的值为:", data)
            });
        }catch(e){
            console.error(e)
        }
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
