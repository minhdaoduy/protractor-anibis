let actionHelper = require('../../infrastructure/helpers/action.helper');
let commonObjects = require('./CommonObjects');

//xpath and elements
let categoryNameXpathString = "//span[@class='category-name' and normalize-space(.)='{0}']",
    elePriceFromTextField = element(by.id("ctl00_phlContent_Filter_ctlPriceRange_txtFrom")),
    elePriceToTextField = element(by.id("ctl00_phlContent_Filter_ctlPriceRange_txtTo")),
    eleLocationTextField = element(by.id("ctl00_phlContent_Filter_ctlLocation_ctlLocationAutocomplete_divLocation")),
    eleDistanceDropDown = element(by.id("ctl00_phlContent_Filter_ctlLocation_ddlDistance")),
    elePriceApplyButton = element(by.xpath("//div[@data-chip-target='price']//*[@class='button-text']")),
    eleWhereApplyButton = element(by.xpath("//div[@data-chip-target='where']//*[@class='button-text']")),
    eleItemList = element.all(by.xpath("//li[@class='list-item listing' or @class='list-item listing highlight']")),
    eleItemDateList = element.all(by.xpath("//li[@class='list-item listing' or @class='list-item listing highlight']//li[@class='horizontal-list-item item-date']")),
    eleFilterDropdown = element(by.id("ctl00_phlContent_ResList_ddlSorting"));

class SearchPage extends commonObjects.constructor{

    async clickCategoryItemByName(categoryName) {
        categoryNameXpathString = categoryNameXpathString.replace('{0}', categoryName);
        let eleCategoryItem = element(by.xpath(categoryNameXpathString));
        await actionHelper.clickElementClickable(eleCategoryItem);
    };

    async inputPriceFrom(price) {
        await actionHelper.sendKeyElement(elePriceFromTextField, price);
    };

    async inputPriceTo(price) {
        await actionHelper.sendKeyElement(elePriceToTextField, price);
    };

    async inputLocation(value) {
        await actionHelper.sendKeyElement(eleLocationTextField, value);
    };

    async clickPriceApplyButton() {
        await actionHelper.clickElementClickable(elePriceApplyButton);
    };

    async openDistanceDropdown() {
        await actionHelper.clickElementClickable(eleDistanceDropDown);
    };

    async selectAnItemFromDistanceDropdown(value) {
        await this.selectItemFromDropdownByValue(eleDistanceDropDown, value)
    };

    async clickWhereApplyButton() {
        await actionHelper.clickElementClickable(eleWhereApplyButton);
    };

    async getTotalResultInCurrentPage() {
        return (await eleItemList.count());
    };

    async getItemDateListFromResultList() {
        return (await eleItemDateList.getText());
    };

    async openFilterDropdown() {
        await actionHelper.clickElementClickable(eleFilterDropdown);
    };

    async selectItemFromFilterDropdown(value) {
        await this.selectItemFromDropdownByValue(eleDistanceDropDown, value)
    };

};
module.exports = new SearchPage();