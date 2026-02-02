//const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test"

test('Locators', async ({ page }) => {
    
    await page.goto("https://www.demoblaze.com/index.html");

    //Clixk on login button - property locator

   // await page.locator('id=login2').click();
   await page.click('id=login2');

   //provide username - locator with css selector
   //await page.locator('#loginusername').fill('pavanol');
   //await page.locator('#loginusername').type('pavanol');
   await page.fill('#loginusername', 'pavanol');
   // await page.type('#loginusername', 'pavanol');

    //provide password - locator with xpath selector
    await page.fill("//input[@id='loginpassword']", 'test@123');

    //click on login button - locator with xpath
    await page.click("//button[normalize-space()='Log in']");

    //verify user is logged in by logout link presence - locator with xpath
    const logoutlink= await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible();

    await page.close();




    

})