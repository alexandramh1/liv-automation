import {expect, type Locator, type Page} from '@playwright/test';

export class SideMenuPage{

    readonly page: Page;
    readonly menuList: Locator;
    readonly usersOption: Locator;

        constructor(page: Page){
            this.page = page
            this.menuList = page.locator(".menu-text");
        }

        async selectMenuOption(menuOption: string){
            await this.menuList.filter({hasText: menuOption}).first().click()
        }
    
}