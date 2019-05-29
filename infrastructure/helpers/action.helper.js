//This helper will support to work on the control
function ActionHelper() {

}

//Wait for Element visible, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForVisibilityOf = async function (webElement) {
    await this.expectedConditions(webElement, 'waitForVisibilityOf');
}

//Wait for Element to be clickable, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForElementToBeClickable = async function (webElement) {
    await this.expectedConditions(webElement, 'waitForElementToBeClickable');
}

//Wait for Element presence, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForPresenceOf = async function (webElement) {
    await this.expectedConditions(webElement, 'waitForPresenceOf');
}

//master for wait element
ActionHelper.prototype.expectedConditions = async function (webElement, expectedCondition) {
    let error = '';
    for (let i = 0; i < browser.expectConditionRetryTime; i++) {
        try {
            switch (expectedCondition) {
                case 'waitForPresenceOf':
                    await browser.waits(
                        protractor.ExpectedConditions.presenceOf(webElement),
                        browser.timeoutInterval
                    );
                    break;
                case 'waitForElementToBeClickable':
                    await browser.waits(
                        protractor.ExpectedConditions.elementToBeClickable(webElement),
                        browser.timeoutInterval
                    );
                    break;
                case 'waitForVisibilityOf':
                    await browser.waits(
                        protractor.ExpectedConditions.visibilityOf(webElement),
                        browser.timeoutInterval
                    );
                    break;
            }
            error = '';
            break;
        } catch (e) {
            error = e;
        }
        if (error !== '')
            throw error;
    }
    
}

//wait element for element clickable, then click
ActionHelper.prototype.clickElementClickable = async function (webElement) {
    let error = '';
    for (let i = 0; i < browser.actionRetryTime; i++) {
        try {
            await this.waitForElementToBeClickable(webElement);
            await webElement.click();
            error = '';
            break;
        } catch (e) {
            error = e;
            browser.sleep(500);
        }
        if (error !== '')
            throw error;
    }
    
}

//wait element for element presence, then click
ActionHelper.prototype.clickElementPresence = async function (webElement) {
    let error = '';
    for (let i = 0; i < browser.actionRetryTime; i++) {
        try {
            await this.waitForPresenceOf(webElement);
            await webElement.click();
            error = '';
            break;
        } catch (e) {
            error = e;
            browser.sleep(500);
        }
        if (error !== '')
            throw error;
    }
    
}

//wait element for element visible, then input
ActionHelper.prototype.sendKeyElement = async function (webElement, text) {
    let error = '';
    for (let i = 0; i < browser.actionRetryTime; i++) {
        try {
            await this.waitForVisibilityOf(webElement);
            await webElement.clear();
            await webElement.sendKeys(text);
            error = '';
            break;
        } catch (e) {
            error = e;
            browser.sleep(500);
        }
        if (error !== '')
            throw error;
    }
}

/**
 * Quick check if element presnt on dom
 * @param webElement
 * @return {Promise.<boolean>}
 */
ActionHelper.prototype.isElementPresence = async function (webElement) {
    this.verifyElementDisplayOrNot(webElement);
}

/**
 * Quick check if element presnt on dom
 * @param webElement
 * @return {Promise.<boolean>}
 */
ActionHelper.prototype.isElementNotDisplay = async function (webElement) {
    this.verifyElementDisplayOrNot(webElement, false);
}

ActionHelper.prototype.verifyElementDisplayOrNot = async function (webElement, isDisplay = true) {
    let error = '';
    try {
        if (isDisplay)
            await browser.wait(
                protractor.ExpectedConditions.presenceOf(webElement),
                browser.timeoutInterval
            );
        else 
            await browser.wait(
                protractor.ExpectedConditions.invisibilityOf(webElement),
                browser.timeoutInterval
            );
    } catch (e) {
        error = e;
    }
    return error === '';
}

module.exports = new ActionHelper();