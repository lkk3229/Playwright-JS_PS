const {test, expect} = require('@playwright/test');

test('Handle radio button', async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //single checkbox
    await page.locator('input#monday').check();
   // await page.check('input#monday');

    await expect(await page.locator('input#monday')).toBeChecked();
    await expect(await page.locator('input#monday').isChecked()).toBeTruthy();

    await page.waitForTimeout(5000);    //pause for 5 seconds

    //uncheck
    await page.locator('input#monday').uncheck();
    await expect(await page.locator('input#monday')).not.toBeChecked();
    await expect(await page.locator('input#monday').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);    //pause for 5 seconds

    //multiple checkboxes
    const checkboxes = [
                       'input#tuesday',
                       'input#wednesday',
                       'input#thursday'
                       ];

    //const count = await checkboxes.count();

    for(const locator of checkboxes)  //select multiple checkboxes
        {
        await page.locator(locator).check();
        await expect(await page.locator(locator)).toBeChecked();
        }
    
    await page.waitForTimeout(5000);    //pause for 5 seconds

    for(const locator of checkboxes)  //unselect multiple checkboxes
        {
        if (await page.locator(locator).isChecked())
         {
            await page.locator(locator).uncheck();
            await expect(await page.locator(locator)).not.toBeChecked();
         }
        }
    
    await page.waitForTimeout(5000);    //pause for 5 seconds
    
})