import AlertPage from '../../pages/alert.page';

describe('handle alert pop up', () => {
  it.skip('accept alert', () => {
    browser.url(`${browser.options.baseUrl}/javascript_alerts`);
    AlertPage.clickOnAlertButtonIndex(1);
    const alertText = browser.getAlertText();
    console.log(alertText);
    assert.equal('I am a JS Alert', alertText);
    browser.acceptAlert();
    console.log(AlertPage.getResultText());
    assert.equal('You successfuly clicked an alert', AlertPage.getResultText());
    browser.pause(3000);
  });
  it.skip('dismiss alert', () => {
    browser.url(`${browser.options.baseUrl}/javascript_alerts`);
    AlertPage.clickOnAlertButtonIndex(2);
    browser.dismissAlert();
    console.log(AlertPage.getResultText());
    assert.equal('You clicked: Cancel', AlertPage.getResultText());
    browser.pause(3000);
  });
  it('enter text on alert & accept', () => {
    browser.url(`${browser.options.baseUrl}/javascript_alerts`);
    AlertPage.clickOnAlertButtonIndex(3);
    browser.sendAlertText('this is alert text');
    browser.acceptAlert();
    console.log(AlertPage.getResultText());
    assert.equal('You entered: this is alert text', AlertPage.getResultText());
    browser.pause(3000);
  });
});
