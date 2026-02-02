import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();

    await page.goto('https://www.demoblaze.com/index.html')

    //Login
    await page.click('#login2')
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()
});

test.afterEach(async ()=>{

    //Logout
    await page.locator('#logout2').click()
});

test('Home Page Test', async () => {
    
    //Home Page
    const products=await page.$$('.hrefch')
    expect(products).toHaveLength(9)
});

test('Add product to cart Test', async () => {

    //Add product to cart
    await page.locator('//button[normalize-space()="Sunsung galaxy s6"]').click()
    await page.locator('//button[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
});
