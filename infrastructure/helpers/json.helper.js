let strTestDataFile;

class JsonHelper {

    //Read data from Json file
    static readJsonData(filePath, objectName, isErrorLog = false) {
        //Import the fs module
        const fs = require('fs');

        //Read the json file into row data
        let rowData = fs.readFileSync(filePath);

        //parse the row data in to Json format
        let result;
        if (isErrorLog) result = JSON.parse(JSON.stringify(rowData));
         else result = JSON.parse(rowData);

        return result[objectName];
    }

    static writeExtendJsonData(filePath, objectName, value) {
        //Import the fs module
        const fs = require('fs');

        //Read the json file into row data
        let rowData = fs.readFileSync(filePath);

        //parse the row data in to Json format
        let result = JSON.parse(rowData);

        if (Array.isArray(value)) {
            let exist = result[objectName];
            if (typeof exist === 'undefined') 
                result[objectName] = value;
            else
                result[objectName] = result[objectName].concat(value);
        } else result[objectName] = value;
        fs.writeFileSync(filePath, JSON.stringify(result));
    }

    static cleanJsonData(filePath) {
        //Import the fs module
        const fs = require('fs');
        fs.writeFileSync(filePath, JSON.stringify({}));
    }

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
    
    static readTestData(dataKeyName) {
        //Import the fs module
        const fs = require('fs');

        //Read the json file into row data
        let rowData = fs.readFileSync(strTestDataFile);

        //parse the row data in to Json format
        let result = JSON.parse(rowData);

        let index = this.readConfig('testDataIndexLine')

        return result['testData'][parseInt(index.toString()) - 1][dataKeyName];
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