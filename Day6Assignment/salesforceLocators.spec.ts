//Hands-on Locators - Salesforce Application

import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test("Salesforce Create Lead",async({page})=>{

// Assignment: 1 Create Lead
// 1. Login to https://login.salesforce.com
await page.goto("https://login.salesforce.com");
await page.locator("#username").fill("suryaanandasundaram.df93405f59ff@agentforce.com");
await page.locator("#password").fill("Surya@123");


// await page.locator("#username").fill("sivaganeshsudharsanam.52128f8b10cd@agentforce.com");
// await page.locator("#password").fill("Shiva@123");


await page.locator("#Login").click();

//Hard wait added to enter the verification code
await page.waitForTimeout(10000);

// 2. Click on toggle menu button from the left corner
await page.locator("//span[text()='App Launcher']").click();

// 3. Click view All and click Sales from App Launcher
await page.locator("//button[text()='View All']").click();
await page.locator("//p[text()='Sales']").click();

// 4. Click on Leads tab
await page.locator('//a[@title="Leads"]').click();

// 5. Click on New button
await page.locator("//button[@name='New']").click();

// 6. Select Salutation dropdown
const salutation = "Mr.";
await page.locator("//button[@name='salutation']").click();
await page.getByTitle(salutation).click();

// 7. Enter the Last Name
  const lastName = faker.person.lastName()
await page.getByPlaceholder("Last Name").fill(lastName);

// 8. Enter the Company Name
 const company = faker.company.name()
await page.locator("[name='Company']").fill(company);

// 9. Click Save and Verify Leads name created
await page.locator("[name='SaveEdit']").click();

const toastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(toastLocator).toBeVisible();
const toastText = `Lead "${salutation} ${lastName}" was created.`;
await expect(toastLocator).toHaveText(toastText);

})

Assignment: 2 Edit Lead

test("Salesforce Edit Lead",async({page})=>{
// 1. Login to https://login.salesforce.com
await page.goto("https://login.salesforce.com");
// await page.locator("#username").fill("suryaanandasundaram.df93405f59ff@agentforce.com");
// await page.locator("#password").fill("Surya@123");

await page.locator("#username").fill("sivaganeshsudharsanam.52128f8b10cd@agentforce.com");
await page.locator("#password").fill("Shiva@123");


await page.locator("#Login").click();

//Hard wait added to enter the verification code
await page.waitForTimeout(10000);

// 2. Click on toggle menu button from the left corner
await page.locator("//span[text()='App Launcher']").click();

// 3. Click view All and click Sales from App Launcher
await page.locator("//button[text()='View All']").click();

// 4. Click on Leads tab
await page.locator('//a[@title="Leads"]').click();

//5.Click on Edit button
await page.locator("//div[@class='slds-grid']/a").last().click();
await page.locator("//li[@role='presentation']//lightning-primitive-icon").last().click();
await page.locator("//span[text()='Edit']").click();

//6.Update the necessary fields (e.g., Salutation, Last Name, or Company Name)

const editSalutation = "Mrs.";
await page.locator("//button[@name='salutation']").click();
await page.getByTitle(editSalutation).click();

// 7. Enter the Last Name
  const editLastName = faker.person.lastName()
await page.getByPlaceholder("Last Name").fill(editLastName);

// 8. Enter the Company Name
 const editCompany = faker.company.name()
await page.locator("[name='Company']").fill(editCompany);

//9.Click Save
await page.locator("[name='SaveEdit']").click();

//10.Verify that the Lead details are updated successfully
const editToastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(editToastLocator).toBeVisible();
const toastText = `Lead "${editSalutation} ${editLastName}" was saved.`;
await expect(editToastLocator).toHaveText(toastText);

})


Assignment: 3 Create Individuals
Test Steps:

test("Salesforce Create Individuals", async ({ page }) => {
    // 1. Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").fill("sivaganeshsudharsanam.52128f8b10cd@agentforce.com");
    await page.locator("#password").fill("Shiva@123");
    await page.locator("#Login").click();

    // 2. Click on the toggle menu button from the left corner
    await page.locator("//span[text()='App Launcher']").click();

    // 3. Click View All and click Individuals from App Launcher
    await page.locator("//button[text()='View All']").click();
    await page.locator("//p[text()='Individuals']").click();

    // 4. Click on the Dropdown icon in the Individuals tab
    await page.locator("//a[@title='Individuals']/following-sibling::one-app-nav-bar-item-dropdown").click();

    // 5. Click on New Individual
    await page.locator("//span[text()='New Individual']").click();

    // 6. Enter the Last Name   
    const individualLastName = faker.person.lastName()
    await page.getByPlaceholder("Last Name").fill(individualLastName);

    // 7. Click save and verify Individuals Name
    await page.locator("//span[text()='Save']").click();

    const individualToastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
    await expect(individualToastLocator).toBeVisible();
    const toastText = `Individual "${individualLastName}" was created.`;
    await expect(individualToastLocator).toHaveText(toastText);
})

// Assignment: 4 Edit Individuals Test

test("Salesforce Edit Individuals", async ({ page }) => {
    // 1. Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com");
    await page.locator("#username").fill("sivaganeshsudharsanam.52128f8b10cd@agentforce.com");
    await page.locator("#password").fill("Shiva@123");

    // await page.locator("#username").fill("suryaanandasundaram.df93405f59ff@agentforce.com");
    // await page.locator("#password").fill("Surya@123");

    await page.locator("#Login").click();
    // 2. Click on the toggle menu button from the left corner
    await page.locator("//span[text()='App Launcher']").click();

    // 3. Click View All and click Individuals from App Launcher
    await page.locator("//button[text()='View All']").click();
    
    // 4. Click on the Individuals tab
    await page.locator("//p[text()='Individuals']").click();

    // 5. Search the Individuals last name
    const searchInput = page.locator("//input[@name='Individual-search-input']");
    await searchInput.fill("Test");
    await searchInput.press('Enter');

    // Wait for search results to appear, then select the first Name record link
    const individualRecordLink = page.locator("//a[contains(@title,'Test')]");
    await expect(individualRecordLink).toBeVisible({ timeout: 15000 });
    await individualRecordLink.click();
    await page.locator("//div[@title='Edit']").click();
    // 7. Select Salutation as 'Mr'
    await page.locator("//a[@class='select']").first().click();
    await page.locator("//a[@title='Mr.']").click();

    // 8. Now enter the first name
    const individualFirstName = faker.person.firstName()
    await page.getByPlaceholder("First Name").fill(individualFirstName);

    // 9. Click on Save and Verify the first name
    await page.locator("//span[text()='Save']").click();
    const individualEditToastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
    await expect(individualEditToastLocator).toBeVisible();
    const toastText = `Individual "${individualFirstName} Test" was saved.`;
    await expect(individualEditToastLocator).toHaveText(toastText);

})

