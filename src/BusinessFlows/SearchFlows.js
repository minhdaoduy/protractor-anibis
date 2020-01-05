let searchPage = require('../PageOjects/SearchPage');
let arrayHelper = require('../../infrastructure/helpers/array.helper');
let FILTER_OPTION = require("../PageOjects/GlobalVariables");

class SearchFlows extends searchPage.constructor{

    async inputDistanceDropdown(value) {
        this.openDistanceDropdown();
        this.selectAnItemFromDistanceDropdown(value);
    };

    async verifyTotalResultInCurrentPage(expectedTotal) {
        let actualTotal = await this.getTotalResultInCurrentPage();
        if (expectedTotal === actualTotal)
            await browser.logger.info("Total result in current page is as expectation: " + expectedTotal);
        else
            throw Error("Total result in current page is NOT as expectation: " +
                "\nExpected: " + expectedTotal +
                "\nActual: " + actualTotal);
    };

    async sortByOption(byValue) {
        this.openFilterDropdown();
        await this.selectItemFromFilterDropdown(byValue);
    };

    async verifySortingOfResultList(byValue) {
        if (byValue === FILTER_OPTION.DATE) {
            let actualDateList = await this.getItemDateListFromResultList();
            if (arrayHelper.getTypeOfSortFromArrayDate(actualDateList) === "Decreasing")
                await browser.logger.info("Total result in current page is as expectation: ");
            else
                throw Error("Total result in current page is NOT as expectation: " +
                    "\nExpected: " + expectedDateList +
                    "\nActual: " + actualDateList);
        } else
            throw Error("Automation has not handle for kind of verifying");
    }



};
module.exports = new SearchFlows();
