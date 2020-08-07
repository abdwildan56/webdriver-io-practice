const loginPage = require('../../pages/loginpage');

describe('handle application login', () => {
  it('enter username', () => {
    browser.url(`${browser.options.baseUrl}/login`);
    loginPage.enterUserName('tomsmith');
    assert.equal('tomsmith', loginPage.username.getValue());
  });
  it('enter password', () => {
    loginPage.enterPassword('SuperSecretPassword');
    assert.equal('SuperSecretPassword', loginPage.password.getValue());
  });
  it('click login button', () => {
    loginPage.clickOnLogin();
  });
  it('should clear username value', () => {
    loginPage.username.click();
    loginPage.username.clearValue();
    assert.equal('', loginPage.username.getValue());
  });
});
