import { test as base } from '@playwright/test'
import { CalculatorPage } from '../PageObject/calculator-page'

type MyFixtures = {
    calcPage: CalculatorPage;
}

export const test = base.extend<MyFixtures>({
    calcPage: async ({page}, use) => {

        const calcPage = new CalculatorPage(page);

        await use(calcPage);
    }
});

export { expect } from '@playwright/test';