const fs = require('fs');

class JsonHelper {

    //Read the config file
    static readCJson(path) {
        //Read the json file into row data
        let rowData = fs.readFileSync(path);

        return JSON.parse(rowData);
    }

    //Read the config file
    static readConfig(configKey) {
        let result = JsonHelper.readCJson('./config.json')
        return result['config'][configKey];
    }

    //Read the config file
    static readTestData() {
        let result = JsonHelper.readCJson('../DataDriven/json/testData.json')
        return result;
    }
    

    static isEqual (j1, j2) {
        let result = false;

        if (Object.keys[j1].length == Object.keys(j2).length) {
            for (let key in j1) {
                if (j1[key] === j2[key])
                    result = true;
                else {
                    result = false;
                    break;
                }
            }
        } else result = false;

        return result;
    }

}
module.exports = JsonHelper;