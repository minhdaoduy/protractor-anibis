let Many = require('extends-classes');
let LoginPage = require('../PageOjects/LoginPage.js');
let ProfilePage = require('../PageOjects/ProfilePage');
let jsonHelper = require('../../infrastructure/helpers/json.helper');
let urlBuilder = require('../test_spec/builder/urlBuilder');

class LoginFlows extends Many(LoginPage.constructor, ProfilePage.constructor){

    async verifyEmailIsFocusing() {
        await browser.logger.info("Start verify cursor is focused to email field");
        if (await this.isEmailIsFocusing())
            await browser.logger.info("The cursor is started at Email field");
        else
            throw Error("The cursor is NOT started at Email field")
    };

    async verifyBackGroundColorOfEmail(expectBackGroundColorOfEmail) {
        await browser.logger.info("Start verify background color for email field");
        let backGroundColorOfEmail = await this.getBackGroundColorOfEmail();
        if (expectBackGroundColorOfEmail.includes(backGroundColorOfEmail))
            await browser.logger.info("BackGround color of Email field is red");
        else
            throw Error("BackGround color of Email field is NOT red" +
                "\nExpected: " + expectBackGroundColorOfEmail +
                "\nActual: " + backGroundColorOfEmail);
    };

    async verifyErrorMessageOfEmail(expectedMessage) {
        let emailErrorMessage = await this.getEmailErrorMessage();
        if (emailErrorMessage === expectedMessage)
            await browser.logger.info("Message of email is correct");
        else
            throw Error("Message of email is NOT correct" +
                "\nExpected: " + expectedMessage +
                "\nActual: " + emailErrorMessage);
    };

    async verifyBackGroundColorOfPassword(expectBackGroundColorOfPassword) {
        await browser.logger.info("Start verify background color for password field");
        let backGroundColorOfPassword = await this.getBackGroundColorOfPassword();
        if (expectBackGroundColorOfPassword.includes(backGroundColorOfPassword))
            await browser.logger.info("BackGround color of Email field is red");
        else
            throw Error("BackGround color of Email field is NOT red" +
                "\nExpected: " + expectBackGroundColorOfPassword +
                "\nActual: " + backGroundColorOfPassword);
    };

    async verifyErrorMessageOfPassword(expectedMessage) {
        await browser.logger.info("Start verify error message of password field");
        let emailErrorMessage = await this.getPasswordErrorMessage();
        if (emailErrorMessage === expectedMessage)
            await browser.logger.info("Message of email is correct");
        else
            throw Error("Message of email is NOT correct" +
                "\nExpected: " + expectedMessage +
                "\nActual: " + emailErrorMessage);
    };

    async verifyLoginWithCorrectEmail(expectedEmail) {
        await browser.logger.info("Start verify error message of email field");
        await browser.get(urlBuilder.getProfileURL());
        let actualEmail = await this.getEmail();
        if (actualEmail === expectedEmail)
            await browser.logger.info("Login with correct email");
        else
            throw Error("Login with incorrect email");
    };

    async inputEmailPasswordAndClickLogin(email, password) {
        await browser.logger.info("Start input email, click continue, input password and click login");
        await this.inputEmailTextField(email);
        await this.clickContinueButton();
        await this.inputPassword(password);
        await this.clickLoginButton();
    };
};
module.exports = new LoginFlows();