const {test, expect} = require('@playwright/test')

test('test1@sanity', async ({page})=>{
    console.log("This is test1......");
})

test('test2@sanity', async ({page})=>{
    console.log("This is test2......");
})

test('test3@reg', async ({page})=>{
    console.log("This is test3......");
})

test('test4@reg', async ({page})=>{
    console.log("This is test4......");
})

test('test5@sanity@reg', async ({page})=>{
    console.log("This is test5......");
})

// to run: npx playwright test --grep @sanity
// to run: npx playwright test --grep @reg
// to run only sanity not reg: npx playwright test --grep @sanity --grep-invert @reg
//to run both sanity and reg: npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity@reg