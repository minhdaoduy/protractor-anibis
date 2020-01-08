//This helper will support to work on the control
function ActionHelper() {

}

//Wait for Element visible, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForVisibilityOf = async function (webElement, tryTime = browser.params.expectConditionRetryTime) {
    await this.expectedConditions(webElement, 'waitForVisibilityOf');
}

//Wait for Element to be clickable, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForElementToBeClickable = async function (webElement, tryTime = browser.params.expectConditionRetryTime) {
    await this.expectedConditions(webElement, 'waitForElementToBeClickable');
}

//Wait for Element presence, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForPresenceOf = async function (webElement, tryTime = browser.params.expectConditionRetryTime) {
    await this.expectedConditions(webElement, 'waitForPresenceOf');
}

//master for wait element
ActionHelper.prototype.expectedConditions = async function (webElement, expectedCondition, tryTime) {
    let error = '';
    for (let i = 0; i < tryTime; i++) {
        try {
            switch (expectedCondition) {
                case 'waitForPresenceOf':
                    await browser.wait(
                        protractor.ExpectedConditions.presenceOf(webElement),
                        browser.params.timeoutInterval
                    );
                    break;
                case 'waitForElementToBeClickable':
                    await browser.wait(
                        protractor.ExpectedConditions.elementToBeClickable(webElement),
                        browser.params.timeoutInterval
                    );
                    break;
                case 'waitForVisibilityOf':
                    await browser.wait(
                        protractor.ExpectedConditions.visibilityOf(webElement),
                        browser.params.timeoutInterval
                    );
                    break;
            }
            error = '';
            break;
        } catch (e) {
            error = e;
        }
    }
    if (error !== '')
        throw error;
    
}

//wait element for element clickable, then click
ActionHelper.prototype.clickElementClickable = async function (webElement, tryTime = browser.params.expectConditionRetryTime) {
    let error = '';
    for (let i = 0; i < tryTime; i++) {
        try {
            await this.waitForElementToBeClickable(webElement);
            await webElement.click();
            error = '';
            break;
        } catch (e) {
            error = e;
            await browser.sleep(browser.params.timeoutInterval);
        }
        if (error !== '')
            throw error;
    }
    
}

//wait element for element presence, then click
ActionHelper.prototype.clickElementPresence = async function (webElement, tryTime = browser.params.expectConditionRetryTime) {
    let error = '';
    for (let i = 0; i < tryTime; i++) {
        try {
            await this.waitForPresenceOf(webElement);
            await webElement.click();
            error = '';
            break;
        } catch (e) {
            error = e;
            await browser.sleep(browser.params.timeoutInterval);
        }
        if (error !== '')
            throw error;
    }
    
}

//wait element for element visible, then input
ActionHelper.prototype.sendKeyElement = async function (webElement, text, tryTime = browser.params.expectConditionRetryTime) {
    let error = '';
    for (let i = 0; i < tryTime; i++) {
        try {
            await this.waitForVisibilityOf(webElement);
            await webElement.clear();
            await webElement.sendKeys(text);
            error = '';
            break;
        } catch (e) {
            error = e;
            await browser.sleep(browser.params.timeoutInterval);
        }
    }
    if (error !== '')
        throw error;
}

/**
 * Quick check if element presnt on dom
 * @param webElement
 * @return {Promise.<boolean>}
 */
ActionHelper.prototype.isElementPresence = async function (webElement) {
    this.verifyElementDisplayOrNot(webElement);
}

ActionHelper.prototype.verifyElementDisplayOrNot = async function (webElement, isDisplay = true) {
    let error = '';
    try {
        if (isDisplay)
            await browser.waits(
                protractor.ExpectedConditions.presenceOf(webElement),
                browser.params.timeoutInterval
            );
        else 
            await browser.waits(
                protractor.ExpectedConditions.invisibilityOf(webElement),
                browser.params.timeoutInterval
            );
    } catch (e) {
        error = e;
    }
    return error === '';
}

ActionHelper.prototype.isElementFocusing = async function (webElement) {
    let activeElement = await browser.driver.switchTo().activeElement();
    let activeID = await activeElement.getAttribute('id');
    let elementID = await webElement.getAttribute('id')
    return activeID === elementID;
}

module.exports = new ActionHelper();