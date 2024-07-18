import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/constants-app.json';
import { SideMenuPage } from '../page-objects/sidemenu.page';

test('login', async ({page}) =>{
    const loginPage = new LoginPage(page)
    const sideMenuPage = new SideMenuPage(page)
    await loginPage.openURL()
    await loginPage.enterEmailAddress(constants.email)
    await loginPage.enterPassword(constants.password)
    await loginPage.clickLoginButton()
    await sideMenuPage.selectMenuOption('Users')
})