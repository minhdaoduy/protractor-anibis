let actionHelper = require('../../infrastructure/helpers/action.helper')

//locators
let lblEmail = element(by.xpath("//div[@class='page-segment page-segment-detail-data']/div[2]//*[@class='semibold']"));

class ProfilePage {
    async getEmail(timeout) {
        await actionHelper.waitForPresenceOf(lblEmail, timeout);
        return lblEmail.getText();
    };
};
module.exports = new ProfilePage();