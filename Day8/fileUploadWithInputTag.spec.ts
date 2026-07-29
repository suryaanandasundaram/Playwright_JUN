/// <reference types="node" />
import { defineConfig,devices } from "@playwright/test";
import { test } from "@playwright/test";
import path from "path"

test("File Upload with Input Tag", async ({ page }) => {

// 1. Go to https://leafground.com/file.xhtml;jsessionid=node0qmdifo8brour1457q9ij2a2it14242458.node0



await page.goto("https://leafground.com/file.xhtml;jsessionid=node0qmdifo8brour1457q9ij2a2it14242458.node0");

// 2. Click the "Choose" button under "Advanced Upload - Only Pictures" and upload two .png files.
// 3. Write a playwright automation script to automate the above steps.
const choose = page.locator('[type="file"]').last();
await choose.setInputFiles([path.join(__dirname,"../../Data/TestLeafLogo.png"),path.join(__dirname,"../../Data/AbsolutePath.png")]);

await page.waitForTimeout(3000);


})