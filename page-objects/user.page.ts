import {expect, type Locator, type Page} from '@playwright/test';

export class UserPage{

    readonly page: Page;
    readonly usersSearchBar: Locator;

        constructor(page: Page){
            this.page = page
            this.usersSearchBar = page.locator("//input[@placeholder= 'Search']");
        }

    async selectUser(userToSelect: string){
        await this.usersSearchBar.fill(userToSelect);
        await this.page.keyboard.press("Enter");
    }
    
}