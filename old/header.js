describe('interaction with web element', () => {

    it('get header value', () => {
        browser.url('https://www.freshworks.com');
        const header = $('h1');
        let text = header.getText();
        console.log(text);
    });
});