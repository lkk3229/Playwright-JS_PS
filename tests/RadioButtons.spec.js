const {test, expect} = require('@playwright/test')

test('handle radio button', async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //locate radio button and select value
    await page.locator('input#male').check();
    // await page.check('input#male');
    await expect(await page.locator('input#male')).toBeChecked();
    await expect(await page.locator('input#male').isChecked()).toBeTruthy(); //male

    await expect(await page.locator('input#female').isChecked()).toBeFalsy(); //female


    await page.waitForTimeout(5000);    //pause for 5 seconds


})

