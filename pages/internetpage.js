/* eslint-disable class-methods-use-this */
class InternetPage {
  get h3Header() {
    return $('h3');
  }

  getLinkElement(index) {
    return $(`ul li:nth-child(${index}) a`);
  }

  clickOnLink(index) {
    this.getLinkElement(index).waitForDisplayed();
    this.getLinkElement(index).click();
  }

  getCheckboxElement(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }

  clickOnCheckBox(index) {
    this.getCheckboxElement(index).waitForDisplayed();
    this.getCheckboxElement(index).click();
  }
}

module.exports = new InternetPage();
