const internetPage = require('../../pages/internetpage');
// const chai = require('chai');

describe('handling checkboxes', () => {
  it('should click checkboxes', () => {
    browser.url('https://the-internet.herokuapp.com/');
    internetPage.clickOnLink(6);
    internetPage.h3Header.waitForDisplayed();
    internetPage.clickOnCheckBox(1);

    expect(internetPage.getCheckboxElement(1).isSelected()).equals(true);
    browser.pause(5000);
  });
});
