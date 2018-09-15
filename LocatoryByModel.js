describe("Locator testing by model", function () {

    it("Automation User Teg Form", function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        element(by.model('Auth.user.name')).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("Roman");

        element(by.className("btn btn-danger")).click();
        browser.sleep(2000);

        element(by.className("ng-scope")).getText().then(function (value) {
            console.log(value);
            expect(value).toContain("Home");

        });
    });


});