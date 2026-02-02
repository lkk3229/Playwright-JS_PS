const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allframes=await page.frames()
    console.log("Number of frames: ",allframes.length)

    //approach 1: using name or Url of the page
   // const frame_1=await.page.frame('name');    //if name of frame is preset
   // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill("[name='mytest1']",'Hello');

    //approch 2 - using frame locator
    const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytest1']")
    inputbox.fill("Hello")
    
    await page.waitForTimeout(5000);

});