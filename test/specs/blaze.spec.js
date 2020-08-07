const blazePage = require('../../pages/blazemeter/blazemeter');

describe('blaze page elements handle', () => {
  it('get texts of all main links', () => {
    browser.url('https://www.blazemeter.com/');
    // blazePage.getTextForLi;
    // blazePage.useCasesElementsText;
    blazePage.getSpesicificChildElementText(4);
  });

  it('main heading video displayed? ', () => {
    console.log(blazePage.mainHeaderVideo.isDisplayed());
  });

  it('main heading video enabled? ', () => {
    console.log(blazePage.mainHeaderVideo.isEnabled());
  });

  it('main heading video exists? ', () => {
    console.log(blazePage.mainHeaderVideo.isExisting());
  });

  it('main heading video displayed in view port? ', () => {
    console.log(blazePage.mainHeaderVideo.isDisplayedInViewport());
  });

  it('jmeter is displayed in view port? ', () => {
    console.log(blazePage.jMeterLink.isDisplayedInViewport());
  });

  it('click on product link if displayed ', () => {
    blazePage.clickOnMenuButton();
    browser.pause(5000);
  });
});
