let actionHelper = require('../../infrastructure/helpers/action.helper')
//locators
let eleLoginButton = element(by.id('ctl00_phlContent_ctlEmailValidationBox_txtEmail'));

let HomePage = function() {
    this.clickLoginButton = async function() {
        try {
            actionHelper.clickElementClickable(eleLoginButton, 5000);
        } catch (e) {
            throw Error('Cannot click login button. Error: ' + e);
        }
    };
};
module.exports = new HomePage();