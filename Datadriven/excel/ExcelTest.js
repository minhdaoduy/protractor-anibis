/**
 * Created by Selenium on 11-12-2015.
 */
var XLSX = require('xlsx');

var workbook = XLSX.readFile('../Excel/test.xlsx');

var first_sheet_name = workbook.SheetNames[0];

//var first_sheet_name = "LoginTest";

var address_of_cell = 'B2';

var worksheet = workbook.Sheets[first_sheet_name];

/* Find desired cell */
var desired_cell = worksheet[address_of_cell];
var username = worksheet['A2'];

/* Get the value */
var desired_value = desired_cell.v;

console.log("username is: " + username.v);
console.log("Password is: " + desired_value);

// var sheet_name_list = workbook.SheetNames;
// sheet_name_list.forEach(function(y) { /* iterate through sheets */
//     var worksheet = workbook.Sheets[y];
//     for (z in worksheet) {
//         /* all keys that do not begin with "!" correspond to cell addresses */
//         if(z[0] === '!') continue;
//         console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
//     }
// });