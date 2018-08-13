var LocationSelectPage = require('../pages/location-select-page.js');
var LoginPage = require('../pages/login-page.js');
describe('Valid and Invalid login', function() {
    var locationSelectPage = new LocationSelectPage();
    var loginPage = new LoginPage();
 beforeEach(function(){
    browser.get('http://cbsqar9:803');
    locationSelectPage.continue.click();
    browser.waitForAngular();
 });
 describe('When server is selected from location select page', function () {
    it('it should go to login page', function(){
    expect(loginPage.username.getAttribute('name')).toEqual('UserName');
    });
 });
 describe('When logging in as valid user', function () {
    it('should pass login', function(){
    loginPage.username.sendKeys('4777');
    element(by.name('Password')).sendKeys('123');
    });
 });
 describe('When logging in as invalid user', function () {
    it('should fail login', function(){
    element(by.name('UserName')).sendKeys('4777');
    element(by.name('Password')).sendKeys('1234');
    });
 });
});