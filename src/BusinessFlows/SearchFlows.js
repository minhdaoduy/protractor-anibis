let searchPage = require('../PageOjects/SearchPage');
let arrayHelper = require('../../infrastructure/helpers/array.helper');
let FILTER_OPTION = require("../PageOjects/GlobalVariables");

class SearchFlows extends searchPage.constructor{

    async inputDistanceDropdown(value) {
        try {
            await browser.logger.info("Start input distance dropdown");
            this.openDistanceDropdown();
            this.selectAnItemFromDistanceDropdown(value);
            await browser.logger.info("Completed input distance dropdown");
        } catch (e) {
            await browser.logger.error("Failed: when input distance dropdown.");
            throw Error("Failed when input distance dropdown. Error: " + e);
        }
    };

    async verifyTotalResultInCurrentPage(expectedTotal) {
        await browser.logger.info("Start verify total result in current page");
        let actualTotal = await this.getTotalResultInCurrentPage();
        if (expectedTotal === actualTotal)
            await browser.logger.info("Passed: Total result in current page is as expectation: " + expectedTotal);
        else {
            await browser.logger.error("Failed: Total result in current page is NOT as expectation: " +
                "\nExpected: " + expectedTotal +
                "\nActual: " + actualTotal);
            throw Error("Total result in current page is NOT as expectation: " +
                "\nExpected: " + expectedTotal +
                "\nActual: " + actualTotal);
        }

    };

    async sortByOption(byValue) {
        try {
            await browser.logger.info("Start sort by " + byValue);
            this.openFilterDropdown();
            await this.selectItemFromFilterDropdown(byValue);
            await browser.logger.info("Completed sort by " + byValue);
        } catch (e) {
            await browser.logger.error("Failed: when sort by " + byValue);
            throw Error("Failed when sort by " + byValue + ". Error: " + e);
        }

    };

    async verifySortingOfResultList(byValue) {
        await browser.logger.info("Start verify sorting result list by " + byValue);
        if (byValue === FILTER_OPTION.DATE) {
            let result;
            try {
                let actualDateList = await this.getItemDateListFromResultList();
                result = arrayHelper.getTypeOfSortFromArrayDate(actualDateList)
            } catch (e) {
                await browser.logger.error("Failed: when get date list from search results or type of sort");
                throw Error("Failed when get date list from search results or type of sort. Error: " + e);
            }

            if (result === "Decreasing")
                await browser.logger.info("Passed: Total result in current page is as expectation: ");
            else {
                await browser.logger.error("Failed: Total result in current page is NOT as expectation: " +
                    "\nExpected: " + expectedDateList +
                    "\nActual: " + actualDateList);
                throw Error("Total result in current page is NOT as expectation: " +
                    "\nExpected: " + expectedDateList +
                    "\nActual: " + actualDateList);
            }

        } else throw Error("Automation has not handle for kind of verifying");
    }



};
module.exports = new SearchFlows();
