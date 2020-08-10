/* eslint-disable max-len */
const crmPage = require('../../pages/crm.page');

describe('scroll to element', () => {
  it.skip('should scroll to forgot pwd link', () => {
    browser.url('https://classic.crmpro.com/');
    crmPage.forgotpwdLink.scrollIntoView();
    crmPage.forgotpwdLink.click();
  });

  it('should scroll to forgot pwd link, move, and click', () => {
    browser.url('https://classic.crmpro.com/');

    crmPage.forgotpwdLink.scrollIntoView();
    crmPage.moveToElement(crmPage.forgotpwdLink);
    crmPage.forgotpwdLink.click();
  });
});
