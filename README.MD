## My note:
* Step 2 does NOT include in the assessment, I just did more than require.
* Handle multiple language also does NOT include in the assessment, I just want to do with the hope I will be get some plus point fro the interviewer
* [verifySortingOfResultList] method still have not handle for sort price due to limit time, therefore I use else to throw error to void automation will pass this method when using with not handled sort type

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* In project directory:
    * `npm install`
    * `npm install -g protractor`
    * `webdriver-manager update` (recommended:  webdriver-manager update --versions.chrome=2.42)
    * `webdriver-manager start` (recommended:  webdriver-manager start --versions.chrome=2.42)
    * `npm i` to install the project dependencies

## Run tests:
* run tests by command line
    1. `cd Configurations`
    2. test multi-language
        * German: `protractor conf2.js --params.language=de --params.expectConditionRetryTime=50 --params.timeoutInterval=3000`
        * Italian: `protractor conf2.js --params.language=it --params.expectConditionRetryTime=50 --params.timeoutInterval=3000`
        * French: `protractor conf2.js --params.language=fr --params.expectConditionRetryTime=50 --params.timeoutInterval=3000`
        
*run tests via IntelliJ IDEA - Ultimate
![_guidline/media/intelliJ_config.png](_guidline/media/intelliJ_config.png)