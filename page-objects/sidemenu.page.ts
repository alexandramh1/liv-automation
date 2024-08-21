import {expect, type Locator, type Page} from '@playwright/test';

export class SideMenuPage{

    readonly page: Page;
    readonly menuList: Locator;
    readonly usersOption: Locator;
    readonly userProfileOptions: Locator;
    readonly userProfileDrawer: Locator;
    readonly logoutButton: Locator;
    readonly messagePopUp: Locator;
    readonly closeMessage: Locator;

        constructor(page: Page){
            this.page = page
            this.menuList = page.locator(".menu-text");
            this.userProfileOptions = page.locator("//div[@id='kt_quick_user_toggle']")
            this.userProfileDrawer = page.locator("//div[@id='kt_quick_user']//a")
            this.logoutButton = this.userProfileDrawer.filter({hasText: " Sign Out "})
            this.messagePopUp = page.locator("//div[@id='toast-container']")
            this.closeMessage = page.locator('.toast-container button')
        }

        async selectMenuOption(menuOption: string){
            await this.menuList.filter({hasText: menuOption}).first().click()
        }
        
        async logout(){
            await this.closeMessage.click()
            await this.userProfileOptions.click()
            await this.logoutButton.click()
        }
}