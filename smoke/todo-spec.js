describe('Valid and Invalid login', function() {
 beforeEach(function(){
    browser.get('http://cbsqar9:803');
    element(by.xpath('//*[@id="login-form-show"]/div[2]/div[1]/div/form/div/div/input')).click();
    browser.waitForAngular();
 });
 describe('When server is selected from location select page', function () {
    it('it should go to login page', function(){
    var username = element(by.name('UserName'));
    expect(username.getAttribute('name')).toEqual('UserName');
    });
 });
 describe('When logging in as valid user', function () {
    it('should pass login', function(){
    element(by.name('UserName')).sendKeys('4777');
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