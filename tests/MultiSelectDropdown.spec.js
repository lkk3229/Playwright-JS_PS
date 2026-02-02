const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple options from multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    //Assertion to verify selected options
    // 1. check the number of selected options
   // const options = await page.locator('#colors option');
    //await expect(options).toHaveCount(7);

    // 2. check number of selected options in dropdown by JS query
    //const options=await page.$$('#colors option')
    //console.log("Total options are: "+options.length);
   // await expect(options.length).toBe(7);

   //3. check presence of specific option
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();



    await page.waitForTimeout(5000);

    
});