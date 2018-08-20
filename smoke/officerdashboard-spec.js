var OfficerDashboardPage = require('../pages/officerdashboard-page.js');
var LocationSelectPage = require('../pages/location-select-page.js');
var LoginPage = require('../pages/login-page.js');

describe('officer dashboard', function(){
    var officerDP = new OfficerDashboardPage();
    var locationSP = new LocationSelectPage();
    var lPage = new LoginPage();
    beforeEach(function(){
        // user login and go to login page
        browser.get('http://cbsccube8:803/#/locationselect');
        locationSP.continue.click();
        browser.waitForAngular();
        lPage.username.sendKeys('4777');
        lPage.password.sendKeys('123');
        lPage.signin.click();
        console.log("valid login signed in");
    });
    afterEach(function(){
     browser.executeScript('window.sessionStorage.clear();');
     browser.executeScript('window.localStorage.clear();');
    });
    describe('when clicking on officer dashboard from login page', function(){
        it('can go to officer dashboard', function(){
            lPage.offdash.click();
            browser.sleep(2000);
            //browser.waitForAngular();
            //expect(officerDP.recuploadedevidence.isPresent()).toBe(true);
            expect(browser.getCurrentUrl()).toMatch('/dashboard/home');
        });
    });
});