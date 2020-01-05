let actionHelper = require('../../infrastructure/helpers/action.helper')

//xpath and elements
let dropdownOptionXpathString = "//option[@value='{0}']";

class CommonObjects {

    async selectItemFromDropdownByValue(webElement, value) {
        dropdownOptionXpathString = dropdownOptionXpathString.replace('{0}', value);
        let eleDropdownOption = element(by.xpath(dropdownOptionXpathString));
        await actionHelper.clickElementClickable(eleDropdownOption);
    };

};
module.exports = new CommonObjects();