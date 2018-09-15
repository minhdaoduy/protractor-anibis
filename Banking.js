describe("Test automation of a banking app", function(){

    it("validate customer login test",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(by.buttonText("Customer Login")).click();
        browser.sleep(3000);
        // expect(browser.getTitle().equal("Protractor practice website - Banking App"));
        expect(browser.getTitle()).toContain("Protractor practice website - Banking App");

        $$("#userSelect option").then(function (items) {
            console.log("----printing values  from dropdown list-----");
            console.log("total values in dropdown are : "+ items.length);

            for (i=0; i<items.length; i++){
                items[i].getText().then(function (text) {
                   console.log(text);
                });
            };

            element(by.model("custId")).$$("[value='2']").click();
            element(by.buttonText("Login")).click();
            browser.sleep(3000);

            element(by.binding("user")).getText().then(function (text) {
                console.log(text);
            });

            expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
            expect(element(by.binding("user")).getText()).toContain("Harry");
            browser.sleep(3000);

        });
    });

});
