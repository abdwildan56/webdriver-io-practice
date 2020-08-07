const internetPage = require('../../pages/internetpage');

describe('handling checkboxes', () => {
  it('check page url', () => {
    browser.url('/');
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`);
  });
  it('should click checkboxes', () => {
    browser.url('/');
    internetPage.clickOnLink(6);
    internetPage.h3Header.waitForDisplayed();
    internetPage.clickOnCheckBox(1);

    expect(internetPage.getCheckboxElement(1).isSelected()).equals(true);
    browser.pause(5000);
  });
  it('check checkbox text page header', () => {
    browser.url('/');
    internetPage.clickOnLink(6);
    internetPage.h3Header.waitForDisplayed();
    const text = internetPage.h3Header.getText();
    expect(text).equals('Checkboxes');
  });
  it('check checkbox page url', () => {
    browser.url('/');
    internetPage.clickOnLink(6);
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
  });
});
