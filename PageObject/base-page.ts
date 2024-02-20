import test, { Page } from '@playwright/test'

export class BasePage {

    readonly _page: Page;

    constructor(public page: Page) {
        this._page = page
    }
    
}