let mongoClient = require("mongodb").MongoClient;
let f = require('util').format;
let jsonHelper = require('./json.helper');

class mongoDBHelper {

    static async connectMongoDB() {
        let server = jsonHelper.readConfig('mongoDBServer');
        let user = jsonHelper.readConfig('mongoDBUser');
        let pass = jsonHelper.readConfig('mongoDBPass');

        let url = f("mongodb://%s:%s@%s:27017?authMechanism=SCRAM-SHA-1&authSource=admin", user, pass, server);
        browser.logger.info("Start connect DB: "
        + "\nServer: " + server
        + "\nUsername: " + user);

    }
}