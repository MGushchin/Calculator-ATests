import test, { Locator, Page, expect } from '@playwright/test'
import { BasePage } from './base-page'

export class CalculatorPage extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    async Visit() {
        await this._page.goto('https://google.com/search?q=калькулятор');
    }

    async VerifyCalculatorIsVisible(): Promise<Boolean> {

        return await test.step(`Checking if the calculator is visible`, async () => {
            return await this._page.locator('.MjjYud > .Ww4FFb > div')
            .first()
            .isVisible();
        });
    }

    async ClickOnNumber(value: string) {

        await test.step(`Clicking on ${value} button`, async () => {
           await this._page.getByRole('cell', { name: value })
           .getByRole('button')
           .click();
        });
    }

    async EnterNumber(value: string) {

        await test.step(`Clicking on calculator textfield`, async () => {
            await this._page.locator('.z7BZJb').click();
        })

        await test.step(`Sending keyboard symbols: ${value}`, async () => {
            await this._page.keyboard.type(value);
        });
    }

    async ClickOnDivide() {

        await test.step(`Clicking on the "divide" button`, async () => {
            await this._page.getByRole('button', { name: 'деление' }).click();
        });
    }

    async GetResult(): Promise<string|null> {

        return await test.step(`Getting calculation result string`, async () => {
            return await this.page.locator('#cwos').textContent();
        });
    }

    async ClickOnEqual() {

        await test.step(`Clicking on the "equals" button`, async () => {
            await this._page.getByRole('button', { name: 'равно' }).click();
        });
    }
}