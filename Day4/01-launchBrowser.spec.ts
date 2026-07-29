


//1. Browser
//2. Context ( similar to window with special chara.)
//3. page



import { chromium,firefox,test, webkit } from "@playwright/test"


test("Learn to Launch a Browser", async()=>{


const browser = await chromium.launch()// browser
// const browser = await webkit.launch()// browser
// const browser = await firefox.launch()// browser
const context = await browser.newContext() //( similar to window with special chara.)
const page = await context.newPage() // opening a page inside a context(special window with certain characteristics)


await page.goto("https://leaftaps.com/opentaps/control/main");


const url = page.url();


console.log(url);


const title = await page.title()


console.log(title);


await page.waitForTimeout(3000) // demo // visibilty purpose




} )
    
    
    
    




/* await returns promise in 3 stages


1. Pending
2. resolve ( example sucessfully launched the browser)
3. reject (problem in launching the browser which should stop execution */