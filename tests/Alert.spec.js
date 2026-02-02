const { test, expect } = require('@playwright/test');

test.skip('Alert with OK ', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling alert Handling  //Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box')
        await dialog.accept();
    })

    await page.click('//button[normalize-spac()="Alert"]');
    await page.waitForTimeout(5000);

});

test.skip('Confirmation Dialog-Alert with OK and cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();  //close by using OK button
        //await dialog.dismiss();   //close by using cancel button
    })

    await page.click('//button[normalize-spac()="Confirm Box"]');

    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000);

});

test('Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('promt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John');  //close by using OK button
        //await dialog.dismiss();   //close by using cancel button
    })

    await page.click('//button[normalize-spac()="Prompt"]');

    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(5000);

});