// import { HTTP } from 'http';
var request = require('request');
var fs = require('fs');

module.exports = function() {

  this.username = "";
  this.password = "";
  this.response = "";
  this.ID = "";
  this.AccessToken = "";


  this.Given(/^I have sent the database wipe command,$/, function () {
    browser.url('http://localhost:3000/api/cleardb');
  });

  this.Given(/^I have created user "([^"]*)" \/ "([^"]*)" with "([^"]*)".$/, 
    function (arg1, arg2, arg3) {
      this.username = arg1;
      this.password = arg2;
      this.response = requestSync({
        url: 'http://localhost:3000/api/users',
        method: 'POST',
        json: {
          'username': this.username,
          'password': this.password
        }
      });

    this.ID = this.response.body.data._id;

    expect(this.response.body.status).toEqual(arg3);

  });

  this.token = "";
  this.When(/^I log in to the API with "([^"]*)",$/, function (arg1) {

    this.response = requestSync({
      url: 'http://localhost:3000/api/login',
      method: 'POST',
      json: {
        'username': this.username,
        'password': this.password
      }
    });

    this.AccessToken = this.response.body.data.authToken;

    expect(this.response.body.status).toEqual(arg1);
  });

  this.Then(/^I get back a >"([^"]*)" char ID and a >"([^"]*)" char token to use for future logins$/, function (arg1, arg2) {

    expect(this.ID.length).toBeGreaterThan(arg1);
    expect(this.AccessToken.length).toBeGreaterThan(arg2);
    console.log("\n      New user ID : " + this.ID);
    console.log("      New user token : " + this.AccessToken);

    // fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
    //   if (err) return console.log(err);
    //   console.log('Hello World > helloworld.txt');
    // });

  });

}

