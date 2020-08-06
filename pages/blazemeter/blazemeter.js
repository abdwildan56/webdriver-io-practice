class BlazePage {
    
    get mainHeaderVideo(){
        return $('h2.home_video__title');
    }

    get menuButton(){
        return $('#main_mobile_hamburger');
    }

    clickOnMenuButton(){
        if(this.menuButton.isDisplayed() === true){
            this.menuButton.click();
        };
    };

    get jMeterLink(){
        return $('div#main_b_footer_second_block li:nth-of-type(2)');
    }

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

    get useCasesElementParent(){
        return $('#main_b_footer_second_block>ul');
    }

    get useCasesElementsText(){
        return this.useCasesElements.filter(element => {
            console.log(element.getText());
        });
    };

    spesifChildElement(index){
        return this.useCasesElementParent.$(`li:nth-child(${index})`)
    };

    getSpesicificChildElementText(index){
        console.log(this.spesifChildElement(index).getText());
    };

};

module.exports = new BlazePage();