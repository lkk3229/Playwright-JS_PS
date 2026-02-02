const {test, expect} = require('@playwright/test')

test('handle inputbox', async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //locate inputbox and type some value
     await expect(await page.locator('#name')).toBeVisible();
     await expect(await page.locator('#name')).toBeEmpty();
     await expect(await page.locator('#name')).toBeEditable();
     await expect(await page.locator('#name')).toBeEnabled();


    await page.fill('#name', 'Pavan Kumar');

    await page.waitForTimeout(5000);    //pause for 5 seconds

    



})

