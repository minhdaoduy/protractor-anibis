let actionHelper = require('../../infrastructure/helpers/action.helper')
// //locators
let eleMyAnibisButton = element(by.id('ctl00_Header1_ctlHeaderMetaBar_ucMainLinks_liMyListing'));
let eleSearchButton = element(by.id("ctl00_phlContent_ctlHeaderSearchFilter_ctlKeywordAutocomplete_btnSearch"));
let eleProfileButton = element(by.xpath("//div[@id='ctl00_Header1_ctlHeaderActionBar_ctlMemberNavigation_divHeaderMenu']//a[contains(@href,'/profile.aspx')]"));

class HomePage extends actionHelper.constructor{
    async clickMyAnibisButton(tryTime) {
        try {
            await this.clickElementClickable(eleMyAnibisButton, tryTime);
        } catch (e) {
            throw Error('Cannot click login button. Error: ' + e);
        }
    };

    async clickProfileButton(tryTime) {
        try {
            await this.clickElementClickable(eleProfileButton, tryTime);
        } catch (e) {
            throw Error('Cannot click login button. Error: ' + e);
        }
    };
};
module.exports = new HomePage();