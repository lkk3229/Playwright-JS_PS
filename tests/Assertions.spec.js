const {test, expect}= require('@playwright/test')

test('AssertionsTest', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    // 1. await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2. await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3. await expect(locator).toBeVisible()	Element is visible
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // 4. await expect(locator).toBeEnabled()	Element is enabled
    //  await expect(locator).toBeDisabled()	Element is disabled
    const searcgStoreBox= await page.locator('#small-searchterms')
    await expect(searcgStoreBox).toBeEnabled()

    // 5. await expect(locator).toBeChecked()	Checkbox is checked 
    //radio button
    const maleRadioButton= await page.locator('#gender-male')
    await maleRadioButton.click()   //select the radio button
    await expect(maleRadioButton).toBeChecked()

    //check box
    const newsletterCheckbox= await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked() //by default it is checked

    // 6. await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regButton=await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')
    
    // 7. await expect(locator).toHaveText()	Element matches text
    await expect(logoElement).toHaveText('nopCommerce')  // exact text

    // 8. await expect(locator).toContainText()	  Element contains text
    await expect(logoElement).toContainText('Commerce')  //partial text

    // 9. await expect(locator).toHaveValue()	Input has a value
    const emailInput=await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    // 10. await expect(locator).toHaveCount()	List has exact number of children
    const options = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13) //12 months + 1 default option

// https://playwright.dev/docs/test-assertions

//Playwright also supports soft assertions: failed soft assertions do not terminate test execution, but mark the test as failed.

})