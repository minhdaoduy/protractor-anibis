let actionHelper = require('../../infrastructure/helpers/action.helper');
let eleEmailTextField = element(by.id('ctl00_phlContent_ctlEmailValidationBox_txtEmail'));
let eleContinueButton = element(by.id('ctl00_phlContent_ctlEmailValidationBox_lbtContinue'));
let eleEmailErrorMessage = element(by.id('ctl00_phlContent_ctlEmailValidationBox_txtEmail-error'));
let elePasswordTextField = element(by.id('ctl00_phlContent_txtPassword'));
let eleLoginButton = element(by.id('ctl00_phlContent_btnLogin'));

class LoginPage{

    isEmailIsFocusing() {
        return actionHelper.isElementFocusing(eleEmailTextField);
    };

    getBackGroundColorOfEmail() {
        return eleEmailTextField.getCssValue('background-color');
    }

    async inputEmailTextField(value) {
        await actionHelper.sendKeyElement(eleEmailTextField, value, browser.expectConditionRetryTime);
    }

    async clickEmailTextField(value) {
        await actionHelper.clickElementClickable(eleEmailTextField, browser.expectConditionRetryTime);
    }

    async clickContinueButton() {
        await actionHelper.clickElementClickable(eleContinueButton, browser.expectConditionRetryTime);
    }

    getEmailErrorMessage() {
        return eleEmailErrorMessage.getText();
    }

    async inputPassword(value) {
        await actionHelper.sendKeyElement(elePasswordTextField, value, browser.expectConditionRetryTime);
    }

    async clickLoginButton() {
        await actionHelper.clickElementClickable(eleLoginButton, browser.expectConditionRetryTime);
    }

};
module.exports = new LoginPage();