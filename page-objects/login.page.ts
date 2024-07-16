import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly loginButton : Locator;
    readonly emailInput : Locator;
    readonly passwordInput : Locator;

        constructor(page: Page){
            this.page = page;
            this.loginButton = page.locator('button[color="primary"]')
            this.emailInput = page.locator('input[type="email"]');
            this.passwordInput = page.locator('input[formcontrolname="password"]');
        }
    
    async openURL(){
        await this.page.goto('/');
    }

    async enterEmailAddress(email: string){
        await this.emailInput.fill(email)
    }

    async enterPassword(password: string){
        await this.passwordInput.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }
}