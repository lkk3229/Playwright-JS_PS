import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
await page.goto('https://www.demoblaze.com/index.html')
await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})

});

test('Full page screenshot', async ({ page }) => {
// await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.goto('https://www.demoblaze.com/index.html')
await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})

});

test('Element screenshot', async ({ page }) => {
await page.goto('https://www.demoblaze.com/index.html')
await page.locator('//a[normalize-space()="Samsung galaxy s6"]').screenshot({path:'tests/screenshots/'+Date.now()+'Macbook.png'})

});