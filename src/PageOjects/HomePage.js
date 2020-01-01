require('../util/select-wrapper.js');
require('../util/customlocators.js');

var HomePage = function () {

    this.loginAsCustomer = function () {

        element(by.partialButtonText("Customer")).click();

    };

    this.loginAsBankManager = function () {

        element(by.ngClick("manager()")).click();
        return require('../pages/AddCustomerDetail.js');
    };
};
module.exports = new HomePage();