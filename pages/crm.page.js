/* eslint-disable class-methods-use-this */
class CRMPage {
  get forgotpwdLink() {
    return $('=Forgot Password?');
  }

  moveToElement(element) {
    element.waitForDisplayed();
    element.moveTo();
  }
}

module.exports = new CRMPage();
