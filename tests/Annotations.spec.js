const {test, expect} = require('@playwright/test')

/*
//only
test.only('test1', async ({page})=>{
    console.log("This is test1......");
})

// skip
test.skip('test2', async ({page})=>{
    console.log("This is test2......");
})
*/

/*
test('test3', async ({page, browserName})=>{
    console.log("This is test3......");
    if(browserName === 'firefox'){
        //skip
        test.skip();
    }
})  
*/

/*
//Fixme
test('test4', async ({page})=>{
    test.fixme()
    console.log("This is test4......"); 
})
*/

/*
//Fail
test('test5', async ({page})=>{
    test.fail()
    console.log("This is test5......");
      expect(1).toBe(1);  //act
}
*/

/*
test('test6', async ({page, browserName})=>{
    if(browserName === 'chromium'){
        test.fail() 
     } //exp   
    })
*/

/*
//slow
test('test7', async ({page})=>{
    test.slow()
    console.log("This is test7......");
    await page.goto('https://www.demoblaze.com/index.html')
})
*/

test('test8', async ({page})=>{
    test.setTimeout(6000)
    console.log("This is test8......");
    await page.goto('https://www.demoblaze.com/index.html')
})

/*
You can focus some tests. When there are focused tests, only these tests run.

test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});

================================================================================
Mark a test as skipped.

test.skip('skip this test', async ({ page }) => {
  // This test is not run
});

================================================================================
Conditionally skip a test
You can skip certain test based on the condition.

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

================================================================================
You can group tests to give them a logical name or to scope before/after hooks to the group.

import { test, expect } from '@playwright/test';

test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});

*/
