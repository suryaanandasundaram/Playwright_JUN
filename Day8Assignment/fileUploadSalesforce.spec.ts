/// <reference types="node" />
import { defineConfig,devices } from "@playwright/test";

import{test,expect} from '@playwright/test'
import path from "path"

test.use({storageState:"Data/skipLogin_salesforce.json"})
// Assignment: 3 Create a new Account
test('File upload in salesforce',async({page})=>{

//Used Storage state - to skip the login  
// 1. Navigate to the url https://login.salesforce.com/
// await page.goto('https://login.salesforce.com/');

// // 2. Enter username
// await page.getByLabel('Username').fill('suryaanandasundaram.df93405f59ff@agentforce.com');

// // 3. Enter password
// await page.getByLabel('Password').fill('Surya@123');

// // 4. Click Login
// await page.getByRole('button',{name:'Login'}).click();


await page.goto('https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home');

// 5. Verify the title and url of the page using appropriate assertions
const title = await page.title();
await expect(title).toBe('Home | Salesforce');

const url = page.url();
await expect(url).toBe('https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home');

// 6. Click App Launcher icon
await page.locator("//span[text()='App Launcher']").click();

// 7. Click View All
await page.locator("//button[text()='View All']").click();

// 8. Enter Accounts in App Launcher search box
await page.getByPlaceholder('Search apps or items...').fill('Accounts');

// 9. Click Accounts
await page.locator("//mark[text()='Accounts']").click();

// 10. Click New
await page.getByRole('button',{name:'New'}).click();

// 11. Enter Account Name
const accountName = 'TestAccountNew'
await page.locator('[name="Name"]') .fill(accountName);

// 12.Select Warm from the Rating dropdown
await page.locator('//button[@aria-label="Rating"]').click();
await page.getByTitle('Warm').click();

// 13. Select Banking from the Industry dropdown
await page.locator('//button[@aria-label="Industry"]').click();
await page.getByTitle('Banking').click();

// 14. Select Public from the Ownership dropdown
await page.locator('//button[@aria-label="Ownership"]').click();
await page.getByTitle('Public').click();

// 15. Select Prospect from the Type dropdown
await page.locator('//button[@aria-label="Type"]').click();
await page.getByTitle('Prospect').click();

// 16. Click Save
await page.locator('//button[@name="SaveEdit"]').click();

// 17. Assert the Account created
const toastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(toastLocator).toBeVisible();
const toastText = `Account "${accountName}" was created.`;
await expect(toastLocator).toHaveText(toastText);

//18.- Upload files
// Click Done and assert the uploaded file

const fPromise = page.waitForEvent("filechooser");
await page.locator("//span[text()='Upload Files']").click();
const fUpload = await fPromise

fUpload.setFiles(path.join(__dirname,'../../Data/AbsolutePath.png'));
const doneLocator = page.locator("//span[text()='Done']");
await doneLocator.click();

// 19. Assert the document attached
const uploadToastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(uploadToastLocator).toBeVisible();
const uploadToastText = `1 file was added to the Account.`;
await expect(uploadToastLocator).toHaveText(uploadToastText);

await expect(page.locator('(//div[@aria-live="polite"]/span)[2]')).toBeVisible();

})