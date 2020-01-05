let jsonHelper = require('../../../infrastructure/helpers/json.helper');
let baseURL = jsonHelper.readConfig('baseURL');

class URLBuilder {

    getNormalURL(uri) {
        return baseURL+ "/" + browser.params.language + "/" + uri;
    }

    getMemberURL(uri, mapParams = {}) {
        let URL = baseURL + "/member" + "/" + uri;
        if (JSON.stringify(mapParams) === "{}")
            return URL;
        else {
            for (let key in mapParams) {
                URL += "?" + key + "=" + mapParams[key]
            }
            return URL
        }
    }

    getHomePageURL() {
        return this.getNormalURL(jsonHelper.readConfig('homeURI'));
    }

    getSearchURL() {
        return this.getNormalURL(jsonHelper.readConfig('searchURI'));
    }

    getProfileURL() {
        return this.getMemberURL(jsonHelper.readConfig('profileURI'), {"lng":browser.params.language});
    }
};
module.exports = new URLBuilder();