/* Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
ID, edits details of the lead (such as name, email, or status), and verifies that the changes have
been successfully saved.  */


import { test } from '@playwright/test'
test("CRM Application Lead Edit Test", async ({ page }) => {

    //Navigate to the url http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username as ‘Demosalesmanager’ 
    await page.locator("#username").fill("Demosalesmanager");

    //Enter the password as ‘crmsfa’ 
    await page.locator("#password").fill("crmsfa");

    //Click the Login button
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA 
    await page.locator("[for='crmsfa']>a").click();

    //Click Leads 
    await page.locator(".x-panel-header>a").nth(1).click();

    //Click Create Lead
    await page.locator(".shortcuts li>a").nth(1).click();

    //Fill the Company Name
    await page.locator("#createLeadForm_companyName").fill("UST");

    //Fill the First Name
    await page.locator("#createLeadForm_firstName").fill("Surya");

    //Fill the Last Name
    await page.locator("#createLeadForm_lastName").fill("Anand");

    //Fill the Salutation
    await page.locator("#createLeadForm_personalTitle").fill("MRs");

    //Fill the Title
    await page.locator("#createLeadForm_generalProfTitle").fill("QA");

    //Fill the Annual Revenue
    await page.locator("#createLeadForm_annualRevenue").fill("1200000");

    //Fill the Department
    await page.locator("#createLeadForm_departmentName").fill("CSE");

    //Fill the Phone number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9090909090");

    //Click Create Lead button
    await page.locator("[name='submitButton']").click();

    //Get the page title 
    const pageTitle = await page.title();
    console.log(`Title  ${pageTitle}`)

    //

});