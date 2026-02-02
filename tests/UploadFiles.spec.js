const { test, expect } = require('@playwright/test');


test('Single File', async ({ page }) => {
    await page.goto('https://www.foundit.in/')

    await page.locator('.mqfihd-upload').click()
    await page.waitForSelector('.mqfihd-upload');

    await page.locator('#file-upload').setInputFiles('tests\Testfile1.pdf')

    await page.waitForTimeout(5000)

})
    

test.only('Multiple Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
    .setInputFiles(['tests\Testfile1.pdf',
                    'tests\Testfile2.pdf'
                    ]);
 
await page.waitForTimeout(5000)

await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('Testfile1.pdf')
await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('Testfile2.pdf')

await page.waitForTimeout(5000)

//removing files
await page.locator('#filesToUpload').setInputFiles([])

await page.waitForTimeout(5000)

await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

await page.waitForTimeout(5000)

})
    