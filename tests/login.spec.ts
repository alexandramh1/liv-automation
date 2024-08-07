import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/constants-app.json';
import { SideMenuPage } from '../page-objects/sidemenu.page';
import { UserPage } from '../page-objects/user.page';
import { PremisePage } from '../page-objects/premise.page';
import { FillReportPage } from '../page-objects/fillreport.page';

test('login', async ({page}) =>{
    const loginPage = new LoginPage(page)
    const sideMenuPage = new SideMenuPage(page)
    const fillReportPage = new FillReportPage(page)
    const premisePage = new PremisePage(page)
    await loginPage.openURL()
    await loginPage.enterEmailAddress(constants.email)
    await loginPage.enterPassword(constants.password)
    await loginPage.clickLoginButton()
    await sideMenuPage.selectMenuOption('Premises')
    await premisePage.waitForPremiseSearchBar()
    await premisePage.searchPremise(constants.premise)
    await premisePage.clickOnDesiredPremise(constants.premise)
    await premisePage.clickOnFillReport()
    await fillReportPage.selectFormField('system_type')
})