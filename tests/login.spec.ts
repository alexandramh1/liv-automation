import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/constants-app.json';
import { SideMenuPage } from '../page-objects/sidemenu.page';
import { UserPage } from '../page-objects/user.page';

test('login', async ({page}) =>{
    const loginPage = new LoginPage(page)
    const sideMenuPage = new SideMenuPage(page)
    const usersPage = new UserPage(page)
    await loginPage.openURL()
    await loginPage.enterEmailAddress(constants.email)
    await loginPage.enterPassword(constants.password)
    await loginPage.clickLoginButton()
    await sideMenuPage.selectMenuOption('Users')
    await usersPage.selectUser('Target Corporation')
})