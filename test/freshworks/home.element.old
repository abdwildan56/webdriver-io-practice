// import * as base from '../common/base-function';
const homePage = require('../../pages/freshworks/homepage');

describe("home page elements handler", () => {

    it("verify home page elements", () => {

        browser.url("https://www.freshworks.com/");
        let text = homePage.pageHeader.getText();
        console.log(text);
        console.log(homePage.subHeader.getText());

        homePage.support.click();
        homePage.supportLink.click();
        browser.pause(5000);
        

    });

});