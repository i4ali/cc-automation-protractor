module.exports = function(){
    this.username = element(by.name('UserName'));
    this.password = element(by.name('Password'));
    this.signin = element(by.css("input[type='submit']"));
    this.offdash = element(by.xpath("//span[contains(text(),\'Officer Dashboard\')]"))
}