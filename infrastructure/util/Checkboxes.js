describe('As a user of website', function() {
    it('should allow me to click Remember me checkbox', function() {
        browser.get('https://material.angular.io/components/checkbox/examples');

        browser.sleep(3000);

        var checkbox1 = element(by.id("mat-checkbox-1-input"));


        var  status1 =  checkbox1.isSelected();
        status1.then(function (value) {
            console.log(value);
        });

        browser.actions().mouseMove(checkbox1).click().perform();
        browser.sleep(3000);

        status1 =  checkbox1.isSelected();
        status1.then(function (value) {
            console.log(value);
        });

        browser.actions().mouseMove(checkbox1).click().perform();
        browser.sleep(3000);

        status1 =  checkbox1.isSelected();
        status1.then(function (value) {
            console.log(value);
        });

    });
});