const {test, expect} = require('@playwright/test');

test('Hidden options dropdown', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await page.click("//span[normalize-space()='PIM']");

    // Click on dropdown to reveal hidden options
    await page.click("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]");

    //wait for the dropdown options to be visible
    await page.waitForTimeout(5000);

    // Select an option from the now-visible dropdown
    const options=await page.$$("//div[@role='listbox']//span")
    for(const option of options)
        {
        const jobTitle=await option.textContent();
        //console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }




    await page.waitForTimeout(5000);

})
