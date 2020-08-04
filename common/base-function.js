export const waitElementVisible = (elementSelector) => {
    const elem = $(elementSelector);
    elem.waitUntil( () => {
        return this.isDisplayed()
    }, 'element failed to visible');
};

export const waitElementExist = (elementSelector) => {
    const elem = $(elementSelector);
    elem.waitUntil( () => {
        return this.isExisting()
    }, 'element failed to exist');
};