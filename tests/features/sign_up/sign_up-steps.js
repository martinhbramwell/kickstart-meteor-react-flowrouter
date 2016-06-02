var FormPage = require('./form.page');

module.exports = function() {

  this.Given(/^I have visited the ToDo page$/, function () {
    FormPage.open('http://localhost:3000/');
  });

  this.Given(/^I have clicked on "([^"]*)"$/, function (arg1) {
    FormPage.actionLink.click('a*=' + arg1);
  });

  this.When(/^I click on "([^"]*)"$/, function (arg1) {
    FormPage.actionLink.click('a*=' + arg1);
  });

  this.Given(/^I enter username : "([^"]*)", password : "([^"]*)" and repeat password : "([^"]*)"$/, function (arg1, arg2, arg3) {
    FormPage.username.setValue(arg1);
    FormPage.password.setValue(arg2);    
    FormPage.passwordRpt.setValue(arg3);    
  });

  this.When(/^I click the "([^"]*)" button$/, function (arg1) {
    FormPage.submit();
  });

  this.Then(/^I should see user link "([^"]*)"$/, function (arg1) {
    
    browser.waitForExist('#login-name-link');
    this.lnkUser = browser.elements('#login-name-link');
    this.userId = this.lnkUser.getText().slice(0, -2);

    expect(this.userId).toEqual(arg1);

  });



}
