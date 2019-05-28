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

}