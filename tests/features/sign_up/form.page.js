var page = require('./page')

var formPage = Object.create(page, {

   actionLink: { get: function () { return browser.element('a'); } },

     username: { get: function () { return browser.elements('#login-username'); } },
     password: { get: function () { return browser.elements('#login-password'); } },
  passwordRpt: { get: function () { return browser.elements('#login-password-again'); } },

  open: {
    value: function(path) {  page.open.call(this, path); }
  },
  submit: {
    value: function() {  browser.click('#login-buttons-password'); }
  }
});

module.exports = formPage
