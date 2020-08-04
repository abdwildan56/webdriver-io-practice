describe('interaction with web element', () => {

    it('enter value in a field', () => {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
    });

    it('get text of field', () => {
        browser.url('/');
        const label = $('.nav-swm-text');
        let text = label.getText();
        console.log(text);
    });

    it('click on a field', () => {
        browser.url('/');
        const icon = $("input[value='Go']");
        icon.click();
    });
});