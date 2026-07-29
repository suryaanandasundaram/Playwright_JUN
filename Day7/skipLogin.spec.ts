import { test } from "@playwright/test";



test.use({storageState:"Data/login_salesforce.json"})


test("Skip Login using the saved storage credentials/json file", async ({ page }) => {

    await page.goto("https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home") // 

    await page.locator('//button[@title="App Launcher"]').click(); // home page

    await page.waitForTimeout(3000)

})