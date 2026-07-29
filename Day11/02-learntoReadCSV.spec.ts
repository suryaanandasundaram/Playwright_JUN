import { parse } from "csv-parse/sync";
import {readFileSync} from "fs" // this fs object is essential to read data from a file within my workspace
import test from "@playwright/test"

let data : any[] = parse(readFileSync("Data/login.csv"),{columns:true}) // here converting csv to object adn read data from csv

//console.log(data[1][1]); before using column:true it was array of array [[]]

/* [
  [ 'Tcaseid', 'username', 'password' ],
  [ 'TC001', 'democsr', 'crmsfa' ],
  [ 'TC002', 'democsr2', 'crmsfa' ]
] */

//Afer applying columns :true it is array of objects
console.log(data)
/* output :
[
  { Tcaseid: 'TC001', username: 'democsr', password: 'crmsfa' },
  { Tcaseid: 'TC002', username: 'democsr2', password: 'crmsfa' }
] */



test.describe.serial("Test to be executed in serially",async () => {
    
// [{...},{...}] => credentials[0] // will be first set of data in the array
// [{...},{...}] => credentials[1] // will be second set of data in the array

for (let index = 0; index < data.length; index++) {  
    
test(`Learn to read CSV file ${data[index].Tcaseid}`, async ({ page }) => {
    //    console.log("democsr");

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill(data[index].username);

    await page.locator("#password").fill(data[index].password)

    await page.waitForTimeout(3000) // demo
    await page.locator(".decorativeSubmit").click()

    //  console.log(credentials.username);


})
    
}

})
