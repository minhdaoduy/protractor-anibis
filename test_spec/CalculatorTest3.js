describe("Validation the Calculator App",function () {



    var expected_text;
    var first=7;
    var second=7;




    beforeEach(function () {
        browser.driver.manage().window().maximize();
        // browser.get("");
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        console.log("Setting up before starting a step");

        element(by.model("first")).sendKeys(first);
        element(by.model("second")).sendKeys(second);
        element(by.buttonText("Go!")).click();

        element(by.binding("latest")).getText().then(function (text) {

            console.log("result is: " + text);
        });

        expected_text = element(by.binding("latest")).getText();

    });

    afterEach(function () {

        browser.sleep(3000);
        console.log("Ending of a step");
    });

    it("validate" + first + "+" + second + "= 14",function () {

        expected_text.then(function (text) {

            console.log("result is: " + text);
            expect(parseInt(text)).toBe(14);
            expect(parseInt(text)).not.toBe(10);
        });
    });



});
