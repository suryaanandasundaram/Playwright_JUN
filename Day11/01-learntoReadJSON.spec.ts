import credentials from '../../Data/login.json'
import {test} from '@playwright/test'

// test.describe.serial("Serial Execution",async()=>{

test.describe.parallel("Parallel Execution",async()=>{    

for (let index = 0; index < credentials.length; index++) {
  
test(`Learn to read JSON file ${credentials[index].Tcaseid}`,async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('#username').fill(credentials[index].username);
    await page.locator('#password').fill(credentials[index].password);
    await page.locator("#Login").click();
    await page.waitForTimeout(3000);

})  
}
})
