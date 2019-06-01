function verify_element(el){
    expect(el.isPresent()).toBeTruthy();
}

describe("Test entering into an input box", function(){

    it("right click mouse",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        verify_element(element(by.buttonText("Customer Login")));
        // browser.wait(until.presenceOf(element(by.buttonText("Customer Login"))), 50000, 'Element taking too long to appear in the DOM');


    });



});