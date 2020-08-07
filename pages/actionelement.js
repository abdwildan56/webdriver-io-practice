/* eslint-disable class-methods-use-this */
class HoverPage {
  get search() {
    return $('#target');
  }

  get resultLabel() {
    return $('#result');
  }

  getResultLabelText() {
    this.resultLabel.waitForDisplayed();
    return this.resultLabel.getText();
  }

  enterSearch(text) {
    this.search.waitForDisplayed();
    this.search.setValue(text);
  }

  user(number) {
    return $(`div.example > div:nth-of-type(${number}) > [alt='User Avatar']`);
  }

  viewProfileUser(number) {
    return $(`a[href='/users/${number}']`);
  }

  moveToElement(element) {
    element.waitForDisplayed();
    element.moveTo();
  }

  clickElement(element) {
    element.waitForDisplayed();
    element.click();
  }
}

module.exports = new HoverPage();
