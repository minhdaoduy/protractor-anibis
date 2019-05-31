let excel = require('exceljs');
let jsonHelper = require('./json.helper.js');

class ExcelHelper {
    //read data directly from excel file via row and column number
    static readData(filePath, sheetName, row, col) {
        let workBook = new excel.Workbook();
        return workBook.xlsx.readFile(filePath)
            .then(function() {
                //sheet obj
                let sheet = workBook.getWorksheet(sheetName);
                //row obj
                let rowObject = sheet.getRow(row);
                //cell obj
                let cellObject = rowObject.getCell(col);

                return cellObject.text;
            })
    }

    //read data from excel test data format with column name
    static readDataProvider(filePath, sheetName, row, colName) {
        let workBook = new excel.Workbook();
        return workBook.xlsx.readFile(filePath)
            .then(function() {
                //sheet obj
                let sheet = workBook.getWorksheet(sheetName);
                //row obj
                let rowObject = sheet.getRow(row) + 2;
                //cell obj
                let cellObject = rowObject.getCell(col);

                return cellObject.text;
            })
    }

    static getAllSheetName(filePath) {
        let workBook = new excel.Workbook();
        return workBook.xlsx.readFile(filePath)
            .then(function() {
                //sheet obj
                let sheets = workBook.worksheets;
                let result = [];
                for (let i=0; i<sheets.length;i++) {
                    result.push(sheets[i].name);
                }

                return result;
            })
    }


}