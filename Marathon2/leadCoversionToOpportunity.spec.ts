/// <reference types="node" />

import{test,expect} from '@playwright/test'
import { faker } from '@faker-js/faker'

test.use({storageState:"Data/skipLogin_salesforce.json"})

test('Verify Lead Creation and Conversion to Opportunity',async({page})=>{

await page.goto('https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home');

//Click on the App Launcher toggle button.
await page.locator("//span[text()='App Launcher']").click();

//Click on the View All link.
await page.locator("//button[text()='View All']").click();

//Type ‘Marketing’ in the search box and click on the Marketing link.
await page.getByPlaceholder('Search apps or items...').fill('Marketing');
await page.locator("//mark[text()='Marketing']").click();

// Navigate to the Leads tab from the Marketing dashboard.
await page.locator('//a[@title="Leads"]').click();

//User should see a list of existing leads (if any) and options to create a new lead.
await page.locator("//table").first().isVisible();

//Click on the New button to create a lead.
await page.locator("//div[@title='New']").click();

// A form to input details for the new lead should appear.
const salutation = "Mr.";
await page.locator("//button[@name='salutation']").click();
await page.getByTitle(salutation).click();

const lastName = faker.person.lastName()
await page.getByPlaceholder("Last Name").fill(lastName);

const company = faker.company.name()
await page.locator("[name='Company']").fill(company);

//Click on the Save button.
await page.locator("[name='SaveEdit']").click();

//A confirmation message should also be displayed and verified.
const toastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(toastLocator).toBeVisible();
const toastText = `Lead "${salutation} ${lastName}" was created.`;
await expect(toastLocator).toHaveText(toastText);

//In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.
await page.locator("//button/span[text()='Show more actions']").click();
await page.locator("//span[text()='Convert']").click();

//Click on the Opportunity Name input field, clear and enter a new opportunity name.
await page.locator("(//div[@class='createPanelCollapsed']/button)[2]").click();
const opportunityName = faker.company.name();
await page.locator("//div[@class='createPanelExpanded']//input").fill(opportunityName);

//Click on the Convert button.
await page.locator("//button[text()='Convert']").click();

//A confirmation message ‘Your lead has been converted’ should be displayed and verified.
const conversionToastLocator = page.locator("//h2[text()='Your lead has been converted']");
await expect(conversionToastLocator).toBeVisible();

//Click on the Go to Leads button.It should redirect the user to Leads page.
await page.locator("//button[text()='Go to Leads']").click();
await expect(page).toHaveTitle('Recently Viewed | Leads | Salesforce');

// Search the verified lead name in the Search box and verify the text ‘No items to display’.
await page.locator("input[placeholder*='Search']").fill(lastName);
await page.locator("input[placeholder*='Search']").press('Enter');
await expect(page.locator("//p[text()='Nothing to see here']")).toBeVisible();

//Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
// await page.locator("//a/span[text()='More']").click();
await page.locator("//span[text()='Opportunities']").click();

await page.locator("input[placeholder*='Search']").fill(opportunityName);
await page.locator("input[placeholder*='Search']").press('Enter');

await expect(page.locator(`//a[@title='${opportunityName}']`)).toBeVisible();

//Search the opportunity name created and click on the created opportunity name.
await page.locator(`//a[@title='${opportunityName}']`).click();

//The created Opportunity Name should appear and verify the same.
const opportunityNameLocator = page.locator("//slot[@name='primaryField']/lightning-formatted-text");
await expect(opportunityNameLocator).toHaveText(opportunityName);

})