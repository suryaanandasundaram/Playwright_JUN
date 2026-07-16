import {test,expect} from '@playwright/test'

test('Frames in ServiceNow',async({page})=>{

//  Precondition:
// - Launch Chromium in non-headless mode
// - Navigate to your servicenow instance login url
await page.goto('https://dev284313.service-now.com');

// - Enter username
await page.locator('#user_name').fill('admin');

// - Enter password
await page.locator('#user_password').fill('kt%1PCn=P9Tl');

// - Click Login
await page.locator('#sysverb_login').click();

// - Click All
await page.locator('div[aria-label="All"]').click();

// - Enter Service Catalog in the navigation filter
await page.locator('#filter').fill('Service Catalog');
await page.locator("mark.filter-match").first().click();

// - Click Mobiles
const frame = await page.frameLocator('#gsft_main');
await frame.getByRole('link', {
  name: 'Mobiles. Cell phones to meet your business needs.',
  exact: true
}).click();

// - Click Apple iPhone 13
await frame.locator('a.service_catalog', {
  hasText: 'Apple iPhone 13'
}).first().click();

// - Click No for ‘Is this a replacement for a lost or broken iPhone?’
await frame.locator("//label[text()='No']").click();

// - Select 500 MB [$1.00] from the Monthly data allowance and get the count of items present
await frame.locator("//div[@class='form-group is-required sc-row sc-row-6']/div[2]/select").selectOption({value:'500MB'});

// - Assert and choose Starlight from the colour
await expect(frame.locator("//label[text()='Green']")).toBeChecked();
await frame.locator("//label[text()='Starlight']").click();
await expect(frame.locator("//label[text()='Starlight']")).toBeChecked();

// - Assert Choose the second option for the storage
await expect(frame.locator("//label[text()='128 GB']")).toBeChecked();
await frame.getByText('256 GB [add $100.00]', { exact: true }).click();
await expect(frame.getByText('256 GB [add $100.00]', { exact: true })).toBeChecked();

// - Click Order Now button
await frame.locator("//button[text()='Order Now']").click();

// - Assert the order status, title and url of the page
await expect(frame.locator("//span[text()='Thank you, your request has been submitted']")).toBeVisible();

await page.waitForLoadState('networkidle');
const url = await page.url();
const title = await page.title();

console.log(`URL of the Page ${url}`);
console.log(`Title of the Page ${title}`);
await expect(title).toMatch(/Order Status:\sREQ\d+/);


})