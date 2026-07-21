import { Page } from '@playwright/test'

export class LoginPage {
    page: Page
    constructor(lpage: Page) {
        this.page = lpage

    }
    async loadUrl(url: string) {
        console.log("Loading URL: " + url);
        await this.page.goto(url);

    }

    async enterCredentials(username: string, password: string) {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
    }
    async clickLogin() {
        await this.page.locator("#Login").click()
        await this.page.waitForTimeout(3000)
    }

}