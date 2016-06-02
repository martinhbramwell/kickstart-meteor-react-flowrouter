function Page () {
}

Page.prototype.open = function (path) {
    console.log("Opening : " + path);
    browser.url(path);
}

module.exports = new Page()
