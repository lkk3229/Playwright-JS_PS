const { test, expect } = require('@playwright/test')

test('Handles dropdowns', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //Multiple ways to select value from dropdown

  //1. select by Label/visible text
  // await page.locator('#country').selectOption({label: 'India'});
  // await page.selectOption('#country', 'India');

  //2. select by visible text
  //  await page.locator('#country').selectOption('India');

  // 3. select by Value attribute
  // await page.locator('#country').selectOption({value: 'uk'});

  //4. select by Index
  //  await page.locator('#country').selectOption({index: 1});  
  // await page.selectOption('#country', {index: 3});

  //Assertion
  // 1. Check number of options in dropdown - Approach 1
 // const AllOptions = await page.locator('#country option').count();
 // expect(AllOptions).toBe(10);
  
  // 2nd way to count number of options in dropdown
 // const Options = await page.locator('#country option')
 // await expect (Options).toHaveCount(10);

  // 2. Check number of options in dropdown - Approach 2
  //const options = await page.$$('#country option');
  //console .log("Total number of options: " + options.length);
  //await expect(options.length).toBe(10);

  //const dropdownCount = await options.count();
  //console.log("Total number of options in dropdown: " + dropdownCount);

  // 3 Check if specific option is present in dropdown - Approach 1
  //const content = await page.locator('#country').textContent();
  //await expect(content.includes('India')).toBeTruthy();
  //await expect(content.includes('XYZ')).toBeFalsy();

  // 4. check presence of value in dropdown - Approach 2 - using looping
  /*const options = await page.$$('#country option');
  let status = false;

  for (const option of options) 
    {
    //console.log(await option.textContent());
    let value = await option.textContent();
      if (value.includes('France'))
      {
        status = true;
        break;
      }
    }

    expect(status).toBeTruthy();
    */

  // 5. Select option from dropdown using loop
  const options = await page.$$('#country option')
    for (const option of options) 
    {
    let value = await option.textContent();
      if (value.includes('France'))
      {
        await page.selectOption("#country", value.trim());
        break;
      }
    }

  await page.waitForTimeout(5000);    //pause for 5 seconds

})