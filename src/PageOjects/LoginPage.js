let actionHelper = require('../../infrastructure/helpers/action.helper');

//
let eleEmailTextField = element(by.id('ctl00_phlContent_ctlEmailValidationBox_txtEmail')),
    eleContinueButton = element(by.id('ctl00_phlContent_ctlEmailValidationBox_lbtContinue')),
    eleEmailErrorMessage = element(by.id('ctl00_phlContent_ctlEmailValidationBox_txtEmail-error')),
    elePasswordTextField = element(by.id('ctl00_phlContent_txtPassword')),
    elePasswordErrorMessage = element(by.id('ctl00_phlContent_txtPassword-error')),
    eleLoginButton = element(by.id('ctl00_phlContent_btnLogin'));

class LoginPage{

    isEmailIsFocusing() {
        return actionHelper.isElementFocusing(eleEmailTextField);
    };

    getBackGroundColorOfEmail() {
        return eleEmailTextField.getCssValue('background-color');
    }

    getBackGroundColorOfPassword() {
        return elePasswordTextField.getCssValue('background-color');
    }

    async inputEmailTextField(value) {
        await actionHelper.sendKeyElement(eleEmailTextField, value, browser.params.expectConditionRetryTime);
    }

    async clickEmailTextField(value) {
        await actionHelper.clickElementClickable(eleEmailTextField, browser.params.expectConditionRetryTime);
    }

    async clickContinueButton() {
        await actionHelper.clickElementClickable(eleContinueButton, browser.params.expectConditionRetryTime);
    }

    async getEmailErrorMessage() {
        return (await eleEmailErrorMessage.getText()).trim();
    }

    async getPasswordErrorMessage() {
        return (await elePasswordErrorMessage.getText()).trim();
    }

    async inputPassword(value) {
        await actionHelper.sendKeyElement(elePasswordTextField, value, browser.params.expectConditionRetryTime);
    }

    async clickLoginButton() {
        await actionHelper.clickElementClickable(eleLoginButton, browser.params.expectConditionRetryTime);
    }

};
module.exports = new LoginPage();