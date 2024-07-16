import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/constants-app.json';

test('login', async ({page}) =>{
    const loginPage = new LoginPage(page)
    await loginPage.openURL()
    await loginPage.enterEmailAddress(constants.email)
    await loginPage.enterPassword(constants.password)
    await loginPage.clickLoginButton()
})