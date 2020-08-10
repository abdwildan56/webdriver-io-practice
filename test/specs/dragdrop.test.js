describe('drag & drop action feature', () => {
  it('do drag & drop', () => {
    browser.url('https://jqueryui.com//resources/demos/droppable/default.html');

    const sourceElement = $('#draggable');
    const targetElement = $('#droppable');

    sourceElement.dragAndDrop(targetElement, 1000);

    browser.pause(5000);
  });
});
