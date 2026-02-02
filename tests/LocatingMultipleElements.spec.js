const {test, expect} = require('@playwright/test');

test('LocatingMultipleElements', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    //locate multiple elements - all category links
   /* const links = await page.$$('a');

    for(const link of links)
    {
        const linktext = await link.textContent();
        console.log("Link Text: ", linktext);
    }
    */

    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for (const product of products)
    {
        const productName = await product.textContent();
        console.log("Product Name: ", productName);
    }

});