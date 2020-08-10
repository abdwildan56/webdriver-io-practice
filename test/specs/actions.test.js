const { assert } = require('chai');
const hoverPage = require('../../pages/actionelement');

describe('page actions Features', () => {
  it('move to element', () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    hoverPage.moveToElement(hoverPage.user(1));
    browser.pause(3000);
    hoverPage.moveToElement(hoverPage.user(3));
    browser.pause(3000);
    hoverPage.clickElement(hoverPage.viewProfileUser(3));
    expect(browser.getUrl()).equals(`${browser.options.baseUrl}/users/3`);
  });
  it('KEYS action perform TAB', () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    hoverPage.enterSearch('Tab');
    const text = hoverPage.getResultLabelText();
    assert.equal('You entered: TAB', text);
    browser.pause(3000);
  });
  it('KEYS action perform SHIFT', () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    hoverPage.enterSearch('Shift');
    const text = hoverPage.getResultLabelText();
    assert.equal('You entered: SHIFT', text);
    browser.pause(3000);
  });
});
