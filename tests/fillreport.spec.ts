import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/constantsApp.json';
import { SideMenuPage } from '../page-objects/sidemenu.page';
import { PremisePage } from '../page-objects/premise.page';
import { FillReportPage } from '../page-objects/fillreport.page';
import { describe } from 'node:test';
import { DeficientSectionPage } from '../page-objects/deficientsection.page';

test.describe('Test variables', () => {
    let loginPage: LoginPage;
    let sideMenuPage: SideMenuPage
    let premisePage: PremisePage
    let fillReportPage: FillReportPage;
    let deficiencySectionPage: DeficientSectionPage;


    test.beforeAll('Before All steps', async ({ browser }) => {
        const page = await browser.newPage()
        loginPage = new LoginPage(page);
        sideMenuPage = new SideMenuPage(page);
        premisePage = new PremisePage(page)
        fillReportPage = new FillReportPage(page);
        deficiencySectionPage = new DeficientSectionPage(page);
        await loginPage.openURL()

    })
    test.beforeEach('login', async ({ browser }) => {
        await loginPage.enterEmailAddress(constants.loginData.email)
        await loginPage.enterPassword(constants.loginData.password)
        await loginPage.clickLoginButton()
        await sideMenuPage.selectMenuOption('Premises')
        await premisePage.waitForPremiseSearchBar()
    })

    test.afterEach('teardown-logout', async () => {
        await sideMenuPage.logout()
    })

    test.afterAll('teardown-close-browser', async ({ browser }) => {
        await browser.close()
    })

    constants.fillDeficientReportTesData.forEach(({ id, premise, system_type, filling_type, contacts, inspector, report_type, deficiency_classification }) => {
        test(`testing with ${id}`, async () => {
            await premisePage.searchPremise(premise)
            await premisePage.clickOnDesiredPremise(premise)
            await premisePage.clickOnFillReport()
            await fillReportPage.selectFormField('system_type')
            await fillReportPage.selectOptionFromDropdown(system_type)
            await fillReportPage.selectFormField('filling_type')
            await fillReportPage.selectOptionFromDropdown(filling_type)
            await fillReportPage.selectFormField('contacts')
            await fillReportPage.selectOptionFromDropdown(contacts)
            await fillReportPage.selectFormField('inspector')
            await fillReportPage.selectOptionFromDropdown(inspector)
            await fillReportPage.fillJobID()
            await fillReportPage.selectFormField('report_type')
            await fillReportPage.selectOptionFromDropdown(report_type)
            await fillReportPage.uploadFile()
            await fillReportPage.selectDateFromCalendar()
            await deficiencySectionPage.isDeficiencyTitleProvided(deficiency_classification);
            await fillReportPage.clickOnFinalSubmitButton()
            //clear deficiency
            await premisePage.clickOnFillReport()
            await fillReportPage.selectFormField('system_type')
            await fillReportPage.selectOptionFromDropdown(system_type)
            await fillReportPage.selectFormField('filling_type')
            await fillReportPage.selectOptionFromDropdown(filling_type)
            await fillReportPage.selectFormField('contacts')
            await fillReportPage.selectOptionFromDropdown(contacts)
            await fillReportPage.selectFormField('inspector')
            await fillReportPage.selectOptionFromDropdown(inspector)
            await fillReportPage.fillJobID()
            await fillReportPage.uploadFile()
            await fillReportPage.selectDateFromCalendar()
            await fillReportPage.clickOnFinalSubmitButton()
        });
    });

    constants.fillComplaintReportTestData.forEach(({id, premise, system_type, filling_type, contacts, inspector, report_type})=> {
        test(`testing with ${id}`, async ()=> {
            await premisePage.searchPremise(premise)
            await premisePage.clickOnDesiredPremise(premise)
            await premisePage.clickOnFillReport()
            await fillReportPage.selectFormField('system_type')
            await fillReportPage.selectOptionFromDropdown(system_type)
            await fillReportPage.selectFormField('filling_type')
            await fillReportPage.selectOptionFromDropdown(filling_type)
            await fillReportPage.selectFormField('contacts')
            await fillReportPage.selectOptionFromDropdown(contacts)
            await fillReportPage.selectFormField('inspector')
            await fillReportPage.selectOptionFromDropdown(inspector)
            await fillReportPage.fillJobID()
            await fillReportPage.selectFormField('report_type')
            await fillReportPage.selectOptionFromDropdown(report_type)
            await fillReportPage.uploadFile()
            await fillReportPage.selectDateFromCalendar()
            await fillReportPage.clickOnFinalSubmitButton()
        })
    })
});

