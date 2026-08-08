import {test,expect} from '@playwright/test'

test.use({storageState:"Data/storage_salesforce.json"})
test("Create dashboard in salesforce through UI and delete via API",async({page,request})=>{
//Login to Salesforce
await page.goto("https://orgfarm-76a1631196-dev-ed.develop.lightning.force.com/lightning/page/home");

//Access the Toggle Menu
await page.locator("//span[text()='App Launcher']").click();

//Navigate to Dashboards
await page.locator("//button[text()='View All']").click();
await page.getByPlaceholder('Search apps or items...').fill('Dashboards');

//Click on the ‘Dashboards link
await page.locator("//mark[text()='Dashboards']").click();

//Create New Dashboard
await page.locator("//div[@title='New Dashboard']").click();

//Enter the Dashboard Name and Create
//Enter Name as 'Salesforce Automation by [Your Name]' and click on "Create."
const dashboardFrame = await page.frameLocator("//iframe[@title='dashboard']");
const dashboardName = 'Salesforce Automation by Surya';
await dashboardFrame.locator('#dashboardNameInput').fill(dashboardName);

//Save and Verify Dashboard Name
await dashboardFrame.locator('#submitBtn').click();

//A new dashboard is created with the specified name, and you are redirected to the dashboard editing page.
await expect(dashboardFrame.locator("//label[@class='slds-assistive-text']")).toHaveText("Edit Dashboard name");
await expect(dashboardFrame.getByText(dashboardName)).toBeVisible();
const actualName = await dashboardFrame.locator("span.slds-form-element__static").textContent();
await expect(actualName).toContain(dashboardName);

//Save and Verify Dashboard Name
await dashboardFrame.locator("//button[text()='Save']").click();

//Verify the dashboard is saved successfully
const toastLocator = page.locator("//span[@data-aura-class='forceActionsText']");
await expect(toastLocator).toBeVisible();
const toastText = `Dashboard saved`;
await expect(toastLocator).toHaveText(toastText);
await expect(dashboardFrame.getByText(dashboardName)).toBeVisible();

let accessToken:any;
let instanceUrl:any;
let firstDashboardId:any;
let firstDashboardName:any;
//Get the dashboard ID via API and delete the dashboard using API

const response = await request.post("https://orgfarm-76a1631196-dev-ed.develop.my.salesforce.com/services/oauth2/token",
    {   headers : {
"Content-Type":"application/x-www-form-urlencoded"
        },   
        form : {
            "grant_type":"client_credentials",
"client_id":"3MVG97L7PWbPq6UyzeoAkcH9d5HcdPXDu1oDaPIeiRCaUo6toov5OCmP3n0qanUVJapbsdS.1A_hTXeRcuhAZ",
"client_secret":"0A48C8F52C2C57FE32B9336DBE88527B7161DE5DBA89390847FC3D5C025F7277"
        }
    })
    const responseBody = await response.json();
    accessToken = responseBody.access_token;
    instanceUrl = responseBody.instance_url;

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

    //Create a GET call using the endpoint Url:

    const getResponse = await request.get(`${instanceUrl}/services/data/v59.0/sobjects/Dashboard`,{
            headers:{"Authorization":`Bearer ${accessToken}`}
    })
//You will receive a response containing the Dashboard name and ID 
   const getResponseBody = await getResponse.json();
   firstDashboardId = getResponseBody.recentItems[0].Id;
   firstDashboardName = getResponseBody.recentItems[0].Title;
   expect(firstDashboardName).toBe(dashboardName);
   expect(getResponseBody.recentItems.length).toBeGreaterThan(1);
   expect(getResponse.status()).toBe(200);
   expect(getResponse.statusText()).toBe("OK");

  //Delete the dashboard using the ID received in the response 
    const deleteResponse = await request.delete(`${instanceUrl}/services/data/v59.0/sobjects/Dashboard/${firstDashboardId}`,
           {
            headers:{
                   "Authorization":`Bearer ${accessToken}`
               }
       })
   //Verify the dashboard has been successfully deleted using the status code
        expect(deleteResponse.status()).toBe(204);
        expect(deleteResponse.statusText()).toBe("No Content");
   })  
