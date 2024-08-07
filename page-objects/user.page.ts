import {expect, type Locator, type Page} from '@playwright/test';

export class UserPage{

    readonly page: Page;
    readonly usersSearchBar: Locator;
    readonly loginAsUserButton : Locator;

        constructor(page: Page){
            this.page = page
            this.usersSearchBar = page.locator("//input[@placeholder= 'Search']");
            this.loginAsUserButton = page.locator(".mat-column-action button:nth-of-type(1) mat-icon")
        }

    async selectUser(userToSelect: string){
        await this.usersSearchBar.fill(userToSelect);
        await this.page.keyboard.press("Enter");
    }

    async clickOnLoginButton(){
        await this.loginAsUserButton.nth(0).click()
        await this.page.waitForLoadState('domcontentloaded')
    }
    
}