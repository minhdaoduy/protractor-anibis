/**
 * Created by Selenium on 11-12-2015.
 */
var XLSX = require('xlsx');
function value_of_a_cell(sheetname, cellname) {
    var workbook = XLSX.readFile('../Datadriven/test.xlsx');
    return workbook.Sheets[sheetname][cellname].v
}


console.log("username is: " + value_of_a_cell("Sheet1","A2"));
console.log("username is: " + value_of_a_cell("Sheet1","B2"));
// console.log("username is: " + workbook.Sheets["Sheet1"]["B2"].v);

// var new_cell = workbook.Sheets["Sheet1"]["A1"];
// new_cell.v='Edit User Name';

// XLSX.writeFile(workbook,'../Datadriven/test.xlsx');



