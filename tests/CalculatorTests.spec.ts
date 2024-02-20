import { test, expect } from './my-test'
import { allure } from "allure-playwright";

test.describe('Calculator Divide Operation', () => {

    test.beforeEach(async ({ calcPage }) => {
        await allure.owner("Maxim Gushchin");
        await allure.tags("UI");

        await calcPage.Visit();
    });

    test('Calculator is visible', async({ calcPage }) => {
        await allure.description(
            "This test checks the visibility of the calculator element on the page."
        );

        await allure.step("Step 1: Verify Calculator is visible", async () => {
            await expect(await calcPage.VerifyCalculatorIsVisible()).toBeTruthy();
        });
    });

    test('Buttons input 3/3=1', async ({ calcPage }) => {
        await allure.description(
            "This test tries to enter the expression 3/3 using the calculator buttons and checks the result for equality 1."
        );

        await allure.step("Step 1: Clicking on button '3'", async () => {
            await calcPage.ClickOnNumber('3');
        });

        await allure.step("Step 2: Clicking on button 'divide'", async () => {
            await calcPage.ClickOnDivide();
        });

        await allure.step("Step 3: Clicking on button '3'", async () => {
            await calcPage.ClickOnNumber('3');
        });

        await allure.step("Step 4: Clicking on button 'equal'", async () => {
            await calcPage.ClickOnEqual();
        });

        await allure.step("Step 5: Verify the result is 1", async () => {
            await expect(await calcPage.GetResult()).toBe('1');
        });

    });

    test('Infinity check', async ({ calcPage }) => {

        await allure.description(
            "This test tries to enter the expression 1/0 using the calculator buttons and checks the result for equality infinity."
        );

        await allure.step("Step 1: Clicking on button '1'", async () => {
            await calcPage.ClickOnNumber('1');
        });

        await allure.step("Step 2: Clicking on button 'divide'", async () => {
            await calcPage.ClickOnDivide();
        });

        await allure.step("Step 3: Clicking on button '0'", async () => {
            await calcPage.ClickOnNumber('0');
        });

        await allure.step("Step 4: Clicking on button 'equal'", async () => {
            await calcPage.ClickOnEqual();
        });

        await allure.step("Step 5: Verify the result is 'Infinity'", async () => {
            await expect(await calcPage.GetResult()).toBe('Infinity');
        });

    });

    test('Keyboard input 333/333=1', async ({ calcPage }) => {

        await allure.description(
            "This test tries to enter the expression 333/333 using the keyboard and checks the result for equality 1."
        );

        await allure.step("Step 1: Enter from keyboard '333'", async () => {
            await calcPage.EnterNumber('333');
        });

        await allure.step("Step 2: Enter from keyboard '/'", async () => {
            await calcPage.EnterNumber('/');
        });

        await allure.step("Step 3: Enter from keyboard '333'", async () => {
            await calcPage.EnterNumber('333');
        });

        await allure.step("Step 4: Enter from keyboard '='", async () => {
            await calcPage.EnterNumber('=');
        });

        await allure.step("Step 5: Verify the result is '1'", async () => {
            await expect(await calcPage.GetResult()).toBe('1');
        });

    });
});