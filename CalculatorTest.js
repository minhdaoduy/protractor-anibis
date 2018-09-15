describe("Validation the Calculator App",function () {

    browser.driver.manage().window().maximize();
    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

    beforeEach(function () {

        console.log("Setting up before starting a step");
    });

    afterEach(function () {

        browser.sleep(3000);
        console.log("Ending of a step");
    });

    it("validate 1 + 1 = 2",function () {
        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("1");
        element(by.buttonText("Go!")).click();

        element(by.binding("latest")).getText().then(function (text) {

            console.log("result is: " + text);
        });
    });

    it("validate 2 + 2 = 4",function () {

        // browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("2");
        element(by.buttonText("Go!")).click();

        element(by.binding("latest")).getText().then(function (text) {

            console.log("result is: " + text);
        });
    });

    it("validate 3 + 3 = 6",function () {

        // browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.buttonText("Go!")).click();

        element(by.binding("latest")).getText().then(function (text) {

            console.log("result is: " + text);
        });
    });
});