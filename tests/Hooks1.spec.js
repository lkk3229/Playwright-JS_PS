/*
Playwright Hooks
==============================

beforeEach: This hook is executed before each individual Test.
afterEach: This hook is executed after each individual Test.

beforeAll: This hook is executed once before any of the tests start running.
afterAll: This hook is executed once after all the tests have been run.

*/

// Added a screenshot with the help of video 0:43 (Check in Hook_Screenshot folder)

import { test, expect } from '@playwright/test';

test('Home Page Test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')

    //Login
    await page.click('#login2')
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

    //Home Page
    const products=await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    //Logout
    await page.locator('#logout2').click()

});

test('Add product to cart Test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')

      //Login
    await page.click('#login2')
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()


    //Add product to cart
    await page.locator('//button[normalize-space()="Sunsung galaxy s6"]').click()
    await page.locator('//button[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    
    //Logout
    await page.locator('#logout2').click()

});
