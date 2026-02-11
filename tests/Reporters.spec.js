const { test, expect } = require('@playwright/test');

test('test1', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle("STORE");
})

test('test2', async ({page})=>{
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle("Wikipedia");
})

test('test3', async ({page})=>{
    await page.goto('https://www.selenium.dev/');
    await expect(page).toHaveTitle("Selenim");
})





// https://playwright.dev/docs/test-reporters
/*
==>List reporter
=======================================
List reporter is default (except on CI where the dot reporter is default). It prints a line for each test being run.
-----------------------------------------------------------------
npx playwright test --reporter=list





--------------------------------------------------------
playwright.config.ts
...................................................
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'list',
});



==>Line reporter
===========================================
Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests.

npx playwright test --reporter=line



--------------------------------------------------------
playwright.config.ts
...................................................
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'line',
});




==>Dot reporter
===========================================
Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output.
---------------------------------------------------------
npx playwright test --reporter=dot





playwright.config.ts
...................................................
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'dot',
});


==> HTML reporter
===========================================
HTML reporter generates a comprehensive HTML report of the test run that can be opened in a browser. It includes details about each test, screenshots, traces, and other useful information for debugging.
---------------------------------------------------------
npx playwright test --reporter=html
--------------------------------------------------------


==> JSON reporter
===========================================
JSON reporter outputs the test results in JSON format to a specified file. This is useful for integrating with other tools or for custom reporting.
---------------------------------------------------------
npx playwright test --reporter=json
--------------------------------------------------------


==> JUnit reporter
===========================================
JUnit reporter generates test results in JUnit XML format, which is commonly used in CI systems for test reporting.
---------------------------------------------------------
npx playwright test --reporter=junit
--------------------------------------------------------
*/

/*
Allure Reports for Playwright
============================================

1) Installation od "allure-playwright" module
    npm install -D allure-playwright

2) Installing Allure Commandline
    Ref: https://www.npmjs.com/package/allure-commandline
    npm install -g allure-commandline --save-dev
    (or)
    sudo npm install -g allure-commandline --save-dev

3) playwright.config.js
    reporter: [ 'allure-playwright',{outputFolder: 'my-allure-results'} ]
    (or)
    npx playwright test --reporter=allure-playwright

4) Run the tests  
    npx playwright test tests/Reporters.spec.js

5) Generating Allure Report:
    allure generate my-allure-results -o my-allure-report --clean

6) Open the report in browser:
    allure open my-allure-report



//2:20

*/
