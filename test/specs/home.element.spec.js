// import * as base from '../common/base-function';
import * as homepage from '../../pages/freshworks/homepage';

describe('home page elements handler', () => {
  it('verify home page elements', () => {
    browser.url('https://www.freshworks.com/');
    const text = homepage.pageHeader.getText();
    console.log(text);
    console.log(homepage.subHeader.getText());

    homepage.support.click();
    homepage.supportLink.click();
    browser.pause(5000);
  });
});
