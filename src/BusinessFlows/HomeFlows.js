let homePage = require('../PageOjects/HomePage')
let HomeFlows = function () {
    this.directHomePageAndClickLogin = async function() {
        await browser.waitForAngularEnabled(false)
        await browser.get(jsonHelper.readConfig('baseURL'));
        await homePage.clickLoginButton();
    }
};
module.exports = new HomeFlows();