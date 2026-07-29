/// <reference types="node" />
import { defineConfig,devices } from "@playwright/test";
import { test } from "@playwright/test";
import path from "path"

test("File Upload without Input Tag", async ({ page }) => {

await page.goto("https://the-internet.herokuapp.com/upload");

const fPromise = page.waitForEvent("filechooser");

await page.locator('//div[@id="drag-drop-upload"]').click();

const fileUpload = await fPromise 

fileUpload.setFiles([path.join(__dirname,"../../Data/TestLeafLogo.png"),path.join(__dirname,"../../Data/AbsolutePath.png")])

await page.waitForTimeout(3000)

})