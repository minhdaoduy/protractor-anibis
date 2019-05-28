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

//Wait for Element present, rety maximum 5 time and each time maximum wait for 5s
ActionHelper.prototype.waitForPresentOf = async function (webElement) {
    await this.expectedConditions(webElement, 'waitForPresentOf');
}

//master for wait element
ActionHelper.prototype.expectedConditions = async function (webElement, expectedCondition) {
    let error = '';
    for (let i = 0; i < browser.expectConditionRetryTime; i++) {
        try {
            switch (expectedCondition) {
                case 'waitForPresentOf':
                    await browser.waits(
                        protractor.ExpectedConditions.presentOf(webElement),
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

module.exports = new ActionHelper();