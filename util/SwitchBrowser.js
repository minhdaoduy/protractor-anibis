
describe("Test entering into an input box", function(){

    it("excuting input box test",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    });

    var browser1;
    it("",function () {

        browser.getAllWindowHandles().then(function(handles){
            browser1 = browser.switchTo().window(handles[0]);
        });

        browser.get("https://angularjs.org/");

        browser.sleep(10000);
    });


});

