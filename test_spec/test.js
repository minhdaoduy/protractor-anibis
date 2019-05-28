var logger = require('./log');

describe("Validation the Calculator App",function () {

    var title;
    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        logger.log("info","Navigating to the website");




        title = browser.getTitle()

    });



    it("validate exact title",function () {



        title.then(function (value) {

            console.log(value);
            expect(title).toEqual("Protractor practice website - Calculator");
            logger.log("info","Validating the exact title");
        });
    });




});
