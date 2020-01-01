let strTestDataFile;

class JsonHelper {

    //Read the config file
    static readConfig(configKey) {
        //Import the fs module
        const fs = require('fs');

        //Read the json file into row data
        let rowData = fs.readFileSync('Configurations/config.json');

        //parse the row data in to Json format
        let result = JSON.parse(rowData);

        return result['config'][configKey];
    }
    
    //Read data from json file and return array object
    static readJsonArray(filePath) {
        //Import the fs module
        const fs = require('fs');

        //Read the json file into row data
        let rowData = fs.readFileSync(filePath);

        //parse the row data in to Json format
        let result = JSON.parse(rowData);

        return JSON.parse(rowData);
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