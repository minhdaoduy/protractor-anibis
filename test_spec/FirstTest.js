describe("Test entering into an input box", function(){

    it("excuting input box test",function () {
        browser.get("https://angularjs.org/");
        element(by.model("yourName")).sendKeys("Raman");
        element(by.binding("yourName")).getText().then(function (text) {
            console.log("#########################");
            console.log(text);
            console.log("#########################");
        });
    });




});
