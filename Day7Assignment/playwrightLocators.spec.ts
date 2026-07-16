import {test,expect} from '@playwright/test'

test('Create a Lead - Playwright Locators',async({page})=>{
// Assignment: 1 Create a Lead
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
await page.goto('https://leaftaps.com/opentaps/control/main')

// 2. Enter the username as ‘Demosalesmanager’
await page.getByLabel('Username').fill('Demosalesmanager');

// 3. Enter the password as ‘crmsfa’
await page.getByLabel('Password').fill('crmsfa');

// 4. Click the Login button
await page.getByRole('button',{name:'Login'}).click();

// 5. Click CRM/SFA
await page.getByText('CRM/SFA').click();

// 6. Click Leads
await page.getByRole('link', { name: 'Leads' }).click();

// 7. Click Create Lead
await page.getByRole('link',{name:'Create Lead'}).click();

// 8. Fill the Company Name
await page.locator('#createLeadForm_companyName').fill('UST');

// 9. Fill the First Name
const firstName = 'Surya'
await page.locator('#createLeadForm_firstName').fill(firstName);

// 10. Fill the Last Name
const lastName = 'Muthu'
await page.locator('#createLeadForm_lastName').fill(lastName);

// 11. Fill the Salutation
await page.locator('#createLeadForm_personalTitle').fill('Mrs.');

// 12. Fill the Title
await page.locator('#createLeadForm_generalProfTitle').fill('Automation Engineer');

// 13. Fill the Annual Revenue
//Using name locator - instead of Id
await page.locator('[name="annualRevenue"]').fill('1200000');

// 14. Fill the Department
await page.locator('[name="departmentName"]').fill('CSE');

// 15. Fill the Phone number
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9090909090');

// 16. Click Create Lead button
//using class name instead of id
await page.locator('.smallSubmit').click();

// 17. Verify the company name, first name, last name and the status
const createdFirstName = await page.locator('#viewLead_firstName_sp').innerText();
await expect(createdFirstName).toBe(firstName);

const createLastName = await page.locator('#viewLead_lastName_sp').innerText();
await expect(createLastName).toBe(lastName);

const status = await page.locator('#viewLead_statusId_sp').innerText();
await expect(status).toBe('Assigned');

// 18. Get the page title
const titleOfthePage = await page.title();
console.log(`Title of the Page ${titleOfthePage}`)
await expect(titleOfthePage).toBe('View Lead | opentaps CRM');

})

test('Edit a Lead - Playwright Locators',async({page})=>{
// Assignment: 2 Edit a Lead
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
await page.goto('https://leaftaps.com/opentaps/control/main')

// 2. Enter the username as ‘Demosalesmanager’
await page.getByLabel('Username').fill('Demosalesmanager');

// 3. Enter the password as ‘crmsfa’
await page.getByLabel('Password').fill('crmsfa');

// 4. Click the Login button
await page.getByRole('button',{name:'Login'}).click();

// 5. Click CRM/SFA
await page.getByText('CRM/SFA').click();

// 6. Click Leads
await page.getByRole('link', { name: 'Leads' }).click();

// 7. Click Find Leads
await page.getByRole('link',{name:'Find Leads'}).click();

// 8. Enter the first name
await page.getByRole('textbox', { name: 'First name:', exact:true}).fill('surya');

// 9. Click Find Leads button
await page.getByRole('button',{name:'Find Leads'}).click();

// 10. Click the first resulting Lead ID
await page.locator("(//td[contains(@class,'x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first')]/div/a)[1]").click();

// 11. Click Edit
await page.getByRole('link',{name:'Edit'}).click();

// 12. Edit Company name
const editedCompanyName = 'TCS';
await page.locator("#updateLeadForm_companyName").fill(editedCompanyName);

// 13. Edit Annual Revenue
const editedAnnualRevenue = '1300000';
await page.locator("#updateLeadForm_annualRevenue").fill(editedAnnualRevenue);

// 14. Edit Department
const editedDepartment = 'ECE';
await page.locator("#updateLeadForm_departmentName").fill(editedDepartment);

// 15. Enter Description
const editedDescription = 'Newly Updated'
await page.locator("#updateLeadForm_description").fill(editedDescription);

// 16. Click Update
await page.getByRole('button',{name:'Update'}).click();

// 17. Verify the edited fields and print the title of the page
const updatedCompanyName = await page.locator('#viewLead_companyName_sp').innerText();
await expect(updatedCompanyName).toContain(editedCompanyName);

const updatedAnnualRevenue = await page.locator('#viewLead_annualRevenue_sp').innerText();
const formattedActual = updatedAnnualRevenue.replace(/[$,]/g, "").replace(".00", "");
await expect(formattedActual).toContain(editedAnnualRevenue);

const updatedDepartment = await page.locator('#viewLead_departmentName_sp').innerText();
await expect(updatedDepartment).toContain(editedDepartment);

const updatedDescription = await page.locator('#viewLead_description_sp').innerText();
await expect(updatedDescription).toContain(editedDescription);


const titleOfthePage = await page.title();
console.log(`Title of the Page ${titleOfthePage}`)
await expect(titleOfthePage).toBe('View Lead | opentaps CRM');

})
test.use({storageState:"Data/skipLogin_salesforce.json"})
// Assignment: 3 Create a new Account
test('Create a new Account In Salesforce -Playwright Locator',async({page})=>{

//Used Storage state - to skip the login  
// 1. Navigate to the url https://login.salesforce.com/
// await page.goto('https://login.salesforce.com/');

// // 2. Enter username using getByLabel
// await page.getByLabel('Username').fill('suryaanandasundaram.df93405f59ff@agentforce.com');

// // 3. Enter password using getByLabel
// await page.getByLabel('Password').fill('Surya@123');

// // 4. Click Login
// await page.getByRole('button',{name:'Login'}).click();

await page.goto('https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home');

// 5. Verify the title and url of the page using appropriate assertions
const title = await page.title();
await expect(title).toBe('Home | Salesforce');

const url = page.url();
await expect(url).toBe('https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home');

// 6. Click App Launcher using the class locator
await page.locator("//button[contains(@class,'slds-button slds-context-bar__button slds-icon-waffle_container slds-show')]").click();

// 7. Click View All using getByText
await page
  .locator('lightning-button')
  .filter({ hasText: 'View All' })
  .getByText('View All')
  .click();

// 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
await page.getByPlaceholder('Search apps or items...').fill('Service');

// 9. Click Service using index based XPath
await page.locator("(//mark[text()='Service'])[1]").click();

// 10. Click Accounts using attribute based CSS selector
await page.locator('[title="Accounts"]').click();

// 11. Click New using getByRole
await page.getByRole('button',{name:'New'}).click();

// 12. Enter Account name using attribute based CSS selector
const accountName = 'TestAccountNew'
await page.locator('[name="Name"]') .fill(accountName);

// 13. Click Save button using XPath
await page.locator('//button[@name="SaveEdit"]').click();

// 14. Verify the toast message displayed
const editToastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(editToastLocator).toBeVisible();
const toastText = `Account "${accountName}" was created.`;
await expect(editToastLocator).toHaveText(toastText);

})