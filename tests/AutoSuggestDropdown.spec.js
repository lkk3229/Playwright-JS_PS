const {test , expect} = require('@playwright/test')

test('Auto suggest dropdown', async ({page}) =>{

    await page.goto('https://www.redbus.in/');

    await page.locator('#srcinput').fill('Delhi');

    //wait for auto suggest options to appear
    await page.waitForSelector("(//div[@class='searchCategory___7c4b56'])[1]")

    const fromCityOptions = await page.$$("(//div[@class='searchCategory___7c4b56'])[1]")

    for(let option of fromCityOptions)
        {
        const value = await option.textContent();
        //console.log("Value is: ",value);
        if(value.includes('Anand Vihar'))
            {
            await option.click();
            break;
            }


        await page.waitForTimeout(5000);
    }
});