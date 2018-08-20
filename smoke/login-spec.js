var LocationSelectPage = require('../pages/location-select-page.js');
var LoginPage = require('../pages/login-page.js');
var HomePage = require('../pages/home-page.js');
describe('Valid and Invalid login', function() {
     var locationSelectPage = new LocationSelectPage();
    var loginPage = new LoginPage();
    var homepage = new HomePage();
 beforeEach(function(){
    browser.get('http://cbsccube8:803/#/locationselect');
    locationSelectPage.continue.click();
    console.log("selecting server");
    browser.waitForAngular();
 });
 afterEach(function(){
     browser.executeScript('window.sessionStorage.clear();');
     browser.executeScript('window.localStorage.clear();');
 });
 describe('When server is selected from location select page', function () {
    it('it should go to login page', function(){
    expect(loginPage.username.getAttribute('name')).toEqual('UserName');
    console.log("checking if at login page");
    });
 });
 describe('When logging in as valid user', function () {
    it('should pass login', function(){
    loginPage.username.sendKeys('4777');
    loginPage.password.sendKeys('123');
    loginPage.signin.click();
    console.log("valid login signed in");
    expect(homepage.users.isPresent()).toBe(true);
    });
 });
 describe('When logging in as invalid user', function () {
    it('should fail login', function(){
    loginPage.username.sendKeys('4777');
    loginPage.password.sendKeys('1234');
    loginPage.signin.click();
    console.log("invalid login signed in");
    expect(homepage.users.isPresent()).toBe(false);
    });
 });



});