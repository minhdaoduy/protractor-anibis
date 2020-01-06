let jsonHelper = require('../../infrastructure/helpers/json.helper');
let urlBuilder = require('../test_spec/builder/urlBuilder');

//business flows
let homeFlows = require("../BusinessFlows/HomeFlows");
let loginFlows = require("../BusinessFlows/LoginFlows");
let searchFlows = require("../BusinessFlows/SearchFlows");
let FILTER_OPTION = require("../PageOjects/GlobalVariables");

describe("Automation testing anibis website: Login, Search", function () {

    beforeAll( async function () {
        await browser.logger.info("Automation testing anibis website: Login, Search");
        await homeFlows.directHomePage();
        await homeFlows.clickMyAnibisButton(browser.params.expectConditionRetryTime);
    })

    it("Step 1: Verify Cursor. Expected: it starts at Username", async function () {
        await browser.logger.info("======================= Start Step 1 =======================");
        //there is an issue: The cursor is NOT started at Email field
        await loginFlows.verifyEmailIsFocusing();
    });

    // this step does NOT include in the assessment
    it("Step 2: Leave empty for email field then click continue button." +
        "\nExpected: Email Field has red background and show error", async function () {
    await browser.logger.info("======================= Start Step 2 =======================");
        await loginFlows.clickContinueButton();
        await loginFlows.verifyBackGroundColorOfEmail(jsonHelper.readTestData()['testData']['errorColor']);
        await loginFlows.verifyErrorMessageOfEmail(jsonHelper.readTestData()['errorMessages']['notInputEmail_ErrorMessage'][browser.params.language]);
    });

    it("Step 3: Submit incorrect data for email field then click continue button." +
        "\nExpected: Email Field has red background and show error", async function () {
        await browser.logger.info("======================= Start step 3 =======================");
        await loginFlows.inputEmailTextField(jsonHelper.readTestData()['testData']['incorrectEmail']);
        await loginFlows.clickContinueButton();
        await loginFlows.verifyBackGroundColorOfEmail(jsonHelper.readTestData()['testData']['errorColor']);
        await loginFlows.verifyErrorMessageOfEmail(jsonHelper.readTestData()['errorMessages']['inputIncorrectEmail_ErrorMessage'][browser.params.language]);
    });

    it("Step 4: Submit incorrect data for password field then click login button." +
        "\nExpected: Email Field has red background and show error", async function () {
        await browser.logger.info("======================= Start step 4 =======================");
        let email = jsonHelper.readTestData()['loginInfo'][0]['username'];
        let password = jsonHelper.readTestData()['testData']['incorrectPassword'];
        await loginFlows.inputEmailPasswordAndClickLogin(email, password);
        await loginFlows.verifyBackGroundColorOfPassword(jsonHelper.readTestData()['testData']['errorColor']);
        await loginFlows.verifyErrorMessageOfPassword(jsonHelper.readTestData()['errorMessages']['inputIncorrectPassword_ErrorMessage'][browser.params.language]);
    });

    it("Step 5: Login successfully." +
        "\nExpected: Login with correct email", async function () {
        await browser.logger.info("======================= Start step 5 =======================");
        await browser.get(urlBuilder.getLoginURL());
        let email = jsonHelper.readTestData()['loginInfo'][0]['username'];
        let password = jsonHelper.readTestData()['loginInfo'][0]['password'];
        await loginFlows.inputEmailPasswordAndClickLogin(email, password);
        await loginFlows.verifyLoginWithCorrectEmail(email);
    });

    it("Step 6: Perform a search with:\n" +
        "a. Immobilien category\n" +
        "b. Location Zurich, 10km\n" +
        "c. Price from 1000 to 5000.\n" +
        "Expected: Make sure that the Result displays exactly 20 items on 1st page", async function () {
        await browser.logger.info("======================= Start step 6 =======================");
        await browser.get(urlBuilder.getSearchURL());

        await searchFlows.clickCategoryItemByName(jsonHelper.readTestData()['categories']['Immovable'][browser.params.language]);

        await searchFlows.inputPriceFrom(jsonHelper.readTestData()['testData']['price']['from']);
        await searchFlows.inputPriceTo(jsonHelper.readTestData()['testData']['price']['to']);
        await searchFlows.clickPriceApplyButton();

        await searchFlows.inputLocation(jsonHelper.readTestData()['testData']['where']['location']);
        await searchFlows.selectAnItemFromDistanceDropdown(jsonHelper.readTestData()['testData']['where']['distance']);
        await searchFlows.clickWhereApplyButton();

        await searchFlows.verifyTotalResultInCurrentPage(jsonHelper.readTestData()['testData']['maximumTotalResultInAPage'])
    });

    it("Step 7: Sort result list by date\n" +
        "Expected: Make sure that the first 20 items are correctly sorted.", async function () {
        await browser.logger.info("======================= Start step 7 =======================");
        await searchFlows.sortByOption(FILTER_OPTION.DATE)
        await searchFlows.verifySortingOfResultList(FILTER_OPTION.DATE)
    });
});

