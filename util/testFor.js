
// at the top of the test spec:
var fs = require('fs');
var dt = require('../util/DateTime.js');
var arr = ['one','two','three','four'];
var arr2 = [];
var list = [
    { date: '12/1/2011', reading: 3, id: 20055 },
    { date: '13/1/2011', reading: 5, id: 20053 },
    { date: '14/1/2011', reading: 6, id: 45652 }
];

// abstract writing screen shot to a file
function writeScreenShot(d) {
    // var stream = fs.createWriteStream(filename);
    // stream.write(new Buffer(data, 'base64'));
    // stream.end();
let finalresult1 = true & true;
let finalresult2 = true & false;
let finalresult3 = false & false;
console.log(finalresult1);
console.log(finalresult2);
console.log(finalresult3);
}

// ...

// within a test:


describe("Test entering into an input box", function(){

    it("right click mouse",async function () {

        writeScreenShot();
    });



});