class HomePage {

    get pageHeader() { return $("h1") }
    get subHeader() { return $('div.mobile-center-desktop-left-align > .sub-text') }
    get support() { return $('ul.nav-main-menu > li:nth-of-type(6) > .nav-label') }
    get supportLink() { return $("a[href='https://www.freshworks.com/support/']") }

}

module.exports = new HomePage();