let homePage = require('../PageOjects/HomePage')
let urlBuilder = require('../test_spec/builder/urlBuilder')
let jsonHelper = require('../../infrastructure/helpers/json.helper')

class HomeFlows extends homePage.constructor {
    async directHomePage() {
        await browser.waitForAngularEnabled(false);

        await browser.logger.info("Access to home page");
        // await browser.get(jsonHelper.readConfig('baseURL'));
        await browser.get(urlBuilder.getHomePageURL());
    }
};
module.exports = new HomeFlows;