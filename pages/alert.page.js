class AlertPage {
  get result() {
    return $('#result');
  }

  getResultText() {
    return this.result.getText();
  }

  getAlertButtonIndex(index) {
    return $(`ul li:nth-child(${index}) button`);
  }

  clickOnAlertButtonIndex(index) {
    this.getAlertButtonIndex(index).waitForDisplayed();
    this.getAlertButtonIndex(index).click();
  }
}

export default new AlertPage();
