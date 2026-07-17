import {test,expect} from '@playwright/test'

test('Search Product and Add to Cart in Service Now',async({page})=>{

//  Precondition:
// • Service Now application is accessible
// • Valid admin credentials are available
// 1. Launch browser and navigate to Service Now application URL
await page.goto('https://dev284313.service-now.com');

// 2. Login using valid admin credentials
await page.locator('#user_name').fill('admin');
await page.locator('#user_password').fill('kt%1PCn=P9Tl');
await page.locator('#sysverb_login').click();

// 3. Verify Service Now home page is displayed
await expect(page).toHaveTitle('Unified Navigation App | ServiceNow')

// 4. Navigate to All → Service Catalog
await page.locator('div[aria-label="All"]').click();
await page.locator('#filter').fill('Service Catalog');
await page.locator("mark.filter-match").first().click();

// 5. Switch to Service Catalog iframe
const frame = await page.frameLocator('#gsft_main');
// 6. Select Mobiles category
await frame.getByRole('link', {
  name: 'Mobiles. Cell phones to meet your business needs.',
  exact: true
}).click();

//7. Choose Apple iPhone 13 Pro
await frame.locator('a.service_catalog', {
  hasText: 'Apple iPhone 13 Pro'
}).first().click();

// 8. Configure all required options
await frame.locator("//label[text()='No']").click();
await frame.locator("//div[@class='form-group is-required sc-row sc-row-6']/div[2]/select").selectOption({value:'500MB'});
await frame.locator("//label[text()='Silver']").click();
await frame.getByText('256 GB [add $100.00]', { exact: true }).click();


//9. Click Order Now
await frame.locator("//button[text()='Order Now']").click();

//10. Verify order confirmation message
await expect(frame.locator("//span[text()='Thank you, your request has been submitted']")).toBeVisible();

// 11. Capture full-page screenshot
await page.screenshot({
    path: 'Screenshots/fullPage.png',
    fullPage: true,
});

})