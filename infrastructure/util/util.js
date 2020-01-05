let jsonHelper = require('../helpers/json.helper');

class util {
    async runFunctionWithTimeOut(func, timeout) {
        for (let i = 0; i < timeout; i+=500) {
            try {
                return func;
            } catch (e) {
                await browser.sleep(500)
            }
        }
    }

    rgbToHex(rgb) {
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
};

module.exports = new util();
