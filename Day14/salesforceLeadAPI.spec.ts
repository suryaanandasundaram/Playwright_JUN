/* 5 points to do API testing:

1. Endpoint : Dev Doc.
2. CRUD : POST, GET,...
3. Authorization : OAuth , Username and Password
4. Header : Content-Type : application/json
5. Request Body

*/

import { expect, test } from "@playwright/test";

let url: any; // declaring url globally so that url is accessible across all the tests
let token: any;
let id: any;

test.describe.serial("Create Lead Salesforce using API", async () => {
  /* GENERATE TOKEN */
  test("Generate Token", async ({ request }) => {
    //await page.goto("")

    const response = await request.post(
      "https://orgfarm-76a1631196-dev-ed.develop.my.salesforce.com/services/oauth2/token", // Serilaization

      {
        
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
          grant_type: "client_credentials",
          client_id:
            "3MVG97L7PWbPq6UyzeoAkcH9d5HcdPXDu1oDaPIeiRCaUo6toov5OCmP3n0qanUVJapbsdS.1A_hTXeRcuhAZ",
          client_secret:
            "0A48C8F52C2C57FE32B9336DBE88527B7161DE5DBA89390847FC3D5C025F7277",
        }
      }
    );

    const responseBody = await response.json(); // Deserialization JSON-> Object

    token = responseBody.access_token;
    console.log(token);

    url = responseBody.instance_url;
    console.log(url);

    console.log(response.status()); // 200
    console.log(response.statusText()); //OK

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
  });

  /* Create LEAD */

  test("Create Lead", async ({ request }) => {
    const createLeadResponse = await request.post(
      `${url}/services/data/v65.0/sobjects/Lead`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          Salutation: "Mrs.",
          FirstName: "Surya_PWJun26",
          LastName: "Anand",
          Company: "UST",
        },
      },
    );

    const responseBody = await createLeadResponse.json();
    console.log(responseBody);

    id = responseBody.id;
  });

  test("Fetch the lead Created", async ({ request }) => {
    const fetchResponse = await request.get(
      `${url}/services/data/v65.0/sobjects/Lead/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const responseBody = await fetchResponse.json();

    console.log(responseBody);
  });

  test("Update the created Lead", async ({ request }) => {
    const updateResponse = await request.patch(
      `${url}/services/data/v65.0/sobjects/Lead/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          LastName: "Muthu",
          Company: "TCS",
        },
      },
    );

    console.log(updateResponse.status()); // 204
    console.log(updateResponse.statusText()); //No Content

    expect(updateResponse.status()).toBe(204);
    expect(updateResponse.statusText()).toBe("No Content");
  });

  test("Delete the created Lead", async ({ request }) => {
    const deleteResponse = await request.delete(
      `${url}/services/data/v65.0/sobjects/Lead/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(deleteResponse.status()); // 204
    console.log(deleteResponse.statusText()); //No Content

    expect(deleteResponse.status()).toBe(204);
    expect(deleteResponse.statusText()).toBe("No Content");
  });
});

/* Note :


page fixture => Page (Interface)=> UI testing  => goto(), locator()...


page=> isolated browser environment => context created for UI testing


request fixture => APIRequestContext (Interface) => API Testing CRUD : POST,GET


request => create an isolated API context*/
