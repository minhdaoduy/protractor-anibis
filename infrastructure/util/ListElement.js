

describe("Test entering into an input box", function(){




    it("right click mouse",function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        var list_element = element.all(by.xpath("//button"));
        var first_element = element.all(by.xpath("//button")).first();
        var last_element = element.all(by.xpath("//button")).last();

        list_element.count().then(function (count) {
            for(var i=0;i<count;i++){
                list_element.get(i).getText().then(function (value) { console.log(value); });
            }
        });

        first_element.getText().then(function (value) { console.log("First element is: " + value); });
        last_element.getText().then(function (value) { console.log("Last element is: " + value); });

        // expect(list_element.get(0).getText()).toBe("Home");
        browser.sleep(5000);
    });



});
