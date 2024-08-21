import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/constantsApp.json';
import { SideMenuPage } from '../page-objects/sidemenu.page';
import { PremisePage } from '../page-objects/premise.page';
import { FillReportPage } from '../page-objects/fillreport.page';
import { describe } from 'node:test';

describe('Test variables', () => {
    let loginPage: LoginPage;
    let sideMenuPage: SideMenuPage
    let premisePage: PremisePage
    let fillReportPage: FillReportPage;


    test.beforeAll('Before All steps', async ({ browser }) => {
        const page = await browser.newPage()
        loginPage = new LoginPage(page);
        sideMenuPage = new SideMenuPage(page);
        premisePage = new PremisePage(page);
        fillReportPage = new FillReportPage(page);
        await loginPage.openURL()
        await loginPage.enterEmailAddress(constants.email)
        await loginPage.enterPassword(constants.password)
        await loginPage.clickLoginButton()
        await sideMenuPage.selectMenuOption('Premises')
        await premisePage.waitForPremiseSearchBar()
        await premisePage.searchPremise(constants.premise)
        await premisePage.clickOnDesiredPremise(constants.premise)
        await premisePage.clickOnFillReport()
    })

    test('compliant', async () => {
        await fillReportPage.selectFormField('system_type')
        await fillReportPage.selectOptionFromDropdown(constants.system_type)
        await fillReportPage.selectFormField('filling_type')
        await fillReportPage.selectOptionFromDropdown(constants.filling_type)
        await fillReportPage.selectFormField('contact_ids')
        await fillReportPage.selectOptionFromDropdown(constants.contact_ids)
        await fillReportPage.selectFormField('inspector_id')
        await fillReportPage.selectOptionFromDropdown(constants.inspector_id)
        await fillReportPage.fillJobID()
        await fillReportPage.selectFormField('report_type')
        await fillReportPage.selectOptionFromDropdown(constants.report_type)
        await fillReportPage.uploadFile()
        await fillReportPage.selectDateFromCalendar()
        await fillReportPage.clickOnFinalSubmitButton()
        await sideMenuPage.logout()
    })

    test('deficient', async () => {
        
    })
});
