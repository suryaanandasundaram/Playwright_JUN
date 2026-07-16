// Assignment Details:
// Automate uploading and downloading a file on the web page without interacting with the Upload and
// Download button.


/// <reference types="node" />
import { defineConfig,devices } from "@playwright/test";
import {test,expect} from '@playwright/test';
import path from "path"

test('File Upload in herokuapp',async ({page})=>{

// - Use page fixture
// - Load the URL (https://the-internet.herokuapp.com/upload)
await page.goto('https://the-internet.herokuapp.com/upload')

// File Upload
// - Upload a document without clicking the Upload button on the page
// - Upload an image inside the red square area
// - Assert that the file has been uploaded
const fPromise =  page.waitForEvent('filechooser');

await page.locator('//div[@id="drag-drop-upload"]').click();

const fileUpload = await fPromise;

fileUpload.setFiles([path.join(__dirname,"../../Data/TestLeafLogo.png"),path.join(__dirname,"../../Data/AbsolutePath.png")]);

await page.waitForTimeout(3000);

await expect(page.locator("//div[@class='dz-details']/div/span").nth(0)).toHaveText('TestLeafLogo.png');

await expect(page.locator("//div[@class='dz-details']/div/span").nth(1)).toHaveText('AbsolutePath.png');

})

test.only('File Download in herokuapp',async({page})=>{
// Preconditions:
// - Load the URL (https://the-internet.herokuapp.com/download)

await page.goto('https://the-internet.herokuapp.com/download');

// File Download
// - Download file.json from the list of files

const fDownloadPromise = page.waitForEvent("download");

await page.locator("//a[text()='Image1.jpg']").click();

const fDownload = await fDownloadPromise;

// - Assert that the file has been downloaded in the required path

const requiredPath = path.join(__dirname,`/../../Data/${fDownload.suggestedFilename()}`);

await fDownload.saveAs(requiredPath);

const fileExists = require('fs').existsSync(requiredPath);

await expect(fileExists).toBeTruthy();

})

