

describe("Test entering into an input box", function(){




    it("right click mouse",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        var el = element(by.buttonText("Bank Manager Login"));
        browser.actions().mouseMove(el).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();


        browser.sleep(10000);
    });

    it("scroll down",function () {
        browser.get("https://angularjs.org/");
        browser.executeScript('window.scrollTo(0,3800);')
        browser.sleep(10000);
    })


});
