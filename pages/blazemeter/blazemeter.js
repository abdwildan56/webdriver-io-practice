class BlazePage {

    get parent(){
        return $('#main-nav ul.list-nav-links');
    };

    get childElements(){
        return this.parent.$$('li');
    }

    get getTextForLi(){
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    };

    get useCasesElements(){
        return $$('#main_b_footer_second_block>ul>li');
    };

    get useCasesElementsText(){
        return this.useCasesElements.filter(element => {
            console.log(element.getText());
        });
    };

};

module.exports = new BlazePage();