/* 5 points to do API testing:
1. Endpoint : Dev Doc.
2. CRUD : POST, GET,...
3. Authorization : OAuth , Username and Password
4. Header : Content-Type : application/json
5. Request Body
*/

import {test,expect} from '@playwright/test'

let accessToken:any;
let instanceUrl:any;
let opportunityId:any;
let firstOpportunityId:any;

test.describe.serial("Create Opportunity using Salesforce API",async()=>{

test("Generate Token for Opportunity Creation",async ({request})=>{

   const response = await request.post("https://orgfarm-76a1631196-dev-ed.develop.my.salesforce.com/services/oauth2/token",
    {   headers : {
"Content-Type":"application/x-www-form-urlencoded"
        },   
        form : {
            "grant_type":"client_credentials",
"client_id":"3MVG97L7PWbPq6UyzeoAkcH9d5HcdPXDu1oDaPIeiRCaUo6toov5OCmP3n0qanUVJapbsdS.1A_hTXeRcuhAZ",
"client_secret":"0A48C8F52C2C57FE32B9336DBE88527B7161DE5DBA89390847FC3D5C025F7277"
        }
    }
    )
    const responseBody = await response.json();
    accessToken = responseBody.access_token;
    instanceUrl = responseBody.instance_url;

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");

})

test("Create Opportunity",async({request})=>{

   const opportunityResponse = await request.post(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity`,{
        headers : {
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`
        },
        data :{
            
    "CloseDate": "2025-03-15",
    "StageName" : "Qualification",
    "Name": "Suryaprabha"
             }
        }
    )
    const opportunityResponseBody = await opportunityResponse.json();
    opportunityId= opportunityResponseBody.id;
    expect(opportunityResponse.status()).toBe(201);
    expect(opportunityResponse.statusText()).toBe("Created");

    })

test("Update Opportunity",async({request})=>{
    const updateResponse = await request.patch(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity/${opportunityId}`,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`
            },
            data:{
    "Type": "New Customer",
    "StageName": "Prospecting"
               }
    }    )
        expect(updateResponse.status()).toBe(204);
        expect(updateResponse.statusText()).toBe("No Content");
})    
test("Get all the Opportunities",async({request})=>{
    const getResponse = await request.get(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity`,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
    }    )

   const getResponseBody = await getResponse.json();
firstOpportunityId = getResponseBody.recentItems[0].Id;
        expect(getResponseBody.recentItems.length).toBeGreaterThan(1);
        expect(getResponse.status()).toBe(200);
        expect(getResponse.statusText()).toBe("OK");
})  

test("Delete the first Opportunity",async({request})=>{
    const deleteResponse = await request.delete(`${instanceUrl}/services/data/v59.0/sobjects/Opportunity/${firstOpportunityId}`,
        {
            headers:{
                "Authorization":`Bearer ${accessToken}`
            }
    }    )

        expect(deleteResponse.status()).toBe(204);
        expect(deleteResponse.statusText()).toBe("No Content");
})  

})
