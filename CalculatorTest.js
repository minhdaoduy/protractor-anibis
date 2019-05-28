describe("Validation the Calculator App",function () {

    // browser.driver.manage().window().maximize();
    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

    beforeEach(async function () {

        await browser.logger.info("Setting up before starting a step");
    });

    afterEach(async function () {

        await browser.sleep(3000);
        await browser.logger.info("Ending of a step");
    });

    it("Step 1 validate 1 + 1 = 2",async function () {
        await browser.logger.info("===========================================");
        await browser.logger.info("Step 1 validate 1 + 1 = 2");
        await element(by.model("first")).sendKeys("1");
        await element(by.model("second")).sendKeys("1");
        await element(by.buttonText("Go!")).click();

        let text = await element(by.binding("latest")).getText();

        await browser.logger.info("result is: " + text);

    });

    it("validate 2 + 2 = 4", async function () {

        await browser.logger.info("===========================================");
        await browser.logger.info("Step 2 validate 2 + 2 = 4");
        // browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        await element(by.model("first")).sendKeys("2");
        await element(by.model("second")).sendKeys("2");
        await element(by.buttonText("Go!")).click();

        let text = await element(by.binding("latest")).getText();

        await browser.logger.info("result is: " + text);
    });

    it("validate 3 + 3 = 6", async function () {
        await browser.logger.info("===========================================");
        await browser.logger.info("Step 2 validate 3 + 3 = 6");
        // browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        await element(by.model("first")).sendKeys("3");
        await element(by.model("second")).sendKeys("3");
        await element(by.buttonText("Go!")).click();

        let text = await element(by.binding("latest")).getText();

        await browser.logger.info("result is: " + text);
    });
});