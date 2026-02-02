const {test, expect} = require('@playwright/test');

test('SoftAssertions', async ({page})=>{

   await page.goto('https://www.demoblaze.com/index.html')

    // https://playwright.dev/docs/test-assertions

   //Hard Assertion
 /*  await expect(page).toHaveTitle('STORE');
   await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
   await expect(page.locator('.navbar-brand')).toBeVisible();
*/
   //Soft Assertions
   //1. Create multiple expect statements
   //2. Wrap them inside try catch block
   //3. Store the errors in an array
   //4. At the end of test, check if there are any errors and fail the test if there are

   await expect.soft(page).toHaveTitle('STORE');
   await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
   await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})