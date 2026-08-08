import { test, expect } from '@playwright/test'

test.use({ storageState: "Data/storage_salesforce.json" })
test("Create and Update Lead in salesforce through API and delete via UI", async ({ page, request }) => {

    let accessToken: any;
    let instanceUrl: any;
    let createLeadId: any;
    let salutation = 'Mrs.'
    let firstName = 'Prabha'
    let lastName = 'Velan'
    let title = 'Salesforce Lead'
    let company = 'UST'

    //Create,Update Lead through API and delete the lead using UI

    //Generate Token

    const response = await request.post("https://orgfarm-76a1631196-dev-ed.develop.my.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "client_credentials",
                "client_id": "3MVG97L7PWbPq6UyzeoAkcH9d5HcdPXDu1oDaPIeiRCaUo6toov5OCmP3n0qanUVJapbsdS.1A_hTXeRcuhAZ",
                "client_secret": "0A48C8F52C2C57FE32B9336DBE88527B7161DE5DBA89390847FC3D5C025F7277"
            }
        })
    const responseBody = await response.json();
    accessToken = responseBody.access_token;
    instanceUrl = responseBody.instance_url;


    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    //Create a JSON data in the body for Salutation, Last Name and Company 
    const createLeadResponse = await request.post(
        `${instanceUrl}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            data: {
                Salutation: salutation,
                LastName: lastName,
                Company: company,
            },
        },
    );

    const createResponseBody = await createLeadResponse.json();
    createLeadId = createResponseBody.id;
    console.log(createResponseBody);
    //Get the status code for the successful creation of the lead 
    console.log(createLeadResponse.status()); // 201
    console.log(createLeadResponse.statusText()); //Created

    //Update the Lead through API
    //Update the created record with the first name and title 
    const updateResponse = await request.patch(
        `${instanceUrl}/services/data/v65.0/sobjects/Lead/${createLeadId}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            data: {
                FirstName: firstName,
                Title: title,
            },
        },
    );

    console.log(updateResponse.status()); // 204
    console.log(updateResponse.statusText()); //No Content
    console.log(updateResponse.json);
    expect(updateResponse.status()).toBe(204);
    expect(updateResponse.statusText()).toBe("No Content");

    //Delete the Lead through UI

    //Login to Salesforce 
    await page.goto("https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home");

    //Access the Toggle Menu
    await page.locator("//span[text()='App Launcher']").click();

    // Navigate to Dashboards,Click "View All" and type "Leads" from the App Launcher. 
    await page.locator("//button[text()='View All']").click();
    await page.getByPlaceholder('Search apps or items...').fill('Leads');

    //Click on the ‘Leads’ link 
    await page.locator("//mark[text()='Leads']").click();

    //Enter the Last name in the Search box and press Enter 
    await page.getByPlaceholder('Search this list...').fill(lastName);
    await page.keyboard.press('Enter');
    await page.locator(`//a[@title='${firstName} ${lastName}']`).click();

    //Verify the lead name displayed is the same created through API.
    //The leads are successfully created and updated through API.
    const leadName = await page.locator("//slot[@name='primaryField']").textContent();
    expect(leadName).toContain(`${salutation} ${firstName} ${lastName}`);
    const actualTitle = await page
        .locator("//p[@title='Title']/../p[2]/slot")
        .textContent();

    expect(actualTitle).toContain(title);

    const actualCompany = await page
        .locator("//p[@title='Company']/../p[2]/slot")
        .textContent();

    expect(actualCompany).toContain(company);


    //Click the dropdown of the updated lead and choose ‘Delete’ option. Click the ‘Delete’ button on the popup
    await page.getByRole('button', { name: 'Show more actions' }).click();

    await page.getByRole('menuitem', { name: 'Delete' }).click();

    const dialog = page.getByRole('dialog');

    await expect(dialog).toBeVisible();

    await dialog.getByRole('button', { name: 'Delete' }).click();

    const deleteToast = page.locator("//span[@data-aura-class='forceActionsText']");
    await expect(deleteToast).toBeVisible();
    const toastText = `Lead "${firstName} ${lastName}" was deleted. Undo`;
    await expect(deleteToast).toHaveText(toastText);


    //Verify the deleted Lead
    //Enter the deleted lead on the Search box and verify there is no lead with that name.

    await page.getByPlaceholder('Search this list...').fill(lastName);
    await page.keyboard.press('Enter');
    await expect(page.locator(`//p[text()='Nothing to see here']`)).toBeVisible();

})