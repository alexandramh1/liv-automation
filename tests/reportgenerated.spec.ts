import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import constants from '../data/reportGenerated.json';
import { SideMenuPage } from '../page-objects/sidemenu.page';
import { PremisePage } from '../page-objects/premise.page';
import { FillReportPage } from '../page-objects/fillreport.page';
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
        premisePage = new PremisePage(page);
        fillReportPage = new FillReportPage(page);
        deficiencySectionPage = new DeficientSectionPage(page);
        await loginPage.openURL()

    })
    test.beforeEach('login', async ({ browser }) => {
        await loginPage.enterEmailAddress(constants.loginData.email)
        await loginPage.enterPassword(constants.loginData.password)
        await loginPage.clickLoginButton()
        await sideMenuPage.selectMenuOption('Inspection Report')
    })

    test.afterEach('teardown-logout', async () => {
        await sideMenuPage.logout()
    })

    test.afterAll('teardown-close-browser', async ({ browser }) => {
        await browser.close()
    })

    constants.verifyPDFSize.forEach(({ id, premise }) => {
        test(`testing with ${id}`, async () => {
            
        });
    });
    
});

