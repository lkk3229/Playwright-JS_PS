const { test, expect } = require('@playwright/test');

test('Keyboard Actions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('[name="text1"]').fill("welcome to automation");
    await page.type('[name="text1"]','welcome to automation')

    //Cltr + A   - select the text
   // await page.keyboard.press('Meta+A')   //for Mac
    await page.keyboard.press('Control+A') 

    //Cltr + C  - copy the text
    await page.keyboard.press('Control+C')

    //Tab 
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Cltr + V - paste the text
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)

});
