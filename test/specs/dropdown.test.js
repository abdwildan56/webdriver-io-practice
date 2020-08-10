describe('drop down handling', () => {
  it.skip('select drop down by value text', () => {
    browser.url('https://web.facebook.com/?_rdc=1&_rdr');
    $('#day').selectByVisibleText('10');
    $('#month').selectByVisibleText('Sep');
    $('#year').selectByVisibleText('1996');
    browser.pause(3000);
  });

  it.skip('select drop down by index', () => {
    browser.url('https://web.facebook.com/?_rdc=1&_rdr');
    $('#day').selectByIndex(13);
    $('#month').selectByIndex(8);
    $('#year').selectByIndex(20);
    browser.pause(3000);
  });

  it.skip('select drop down by attribute value', () => {
    browser.url('https://web.facebook.com/?_rdc=1&_rdr');
    $('#day').selectByAttribute('value', '13');
    $('#month').selectByAttribute('value', '9');
    $('#year').selectByAttribute('value', '2020');
    browser.pause(3000);
  });

  it('get all the values from dropdown', () => {
    browser.url('https://web.facebook.com/?_rdc=1&_rdr');
    const list = $$('#month option');
    // console.log('length is', list.length);
    for (let i = 0; i < list.length; i += 1) {
      const element = list[i];
      //   console.log(i, element.getText());
      if (element.getText() === 'Mar') {
        element.click();
        break;
      }
    }
    browser.pause(3000);
  });
});
