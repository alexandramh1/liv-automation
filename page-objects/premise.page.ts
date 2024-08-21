import {expect, type Locator, type Page} from '@playwright/test';

export class PremisePage{

    readonly page: Page;
    readonly premiseToSelect: Locator;
    readonly premiseSearchBar : Locator;
    readonly desiredPremiseSelect : Locator;
    readonly fillReportButton : Locator;

        constructor(page: Page){
            this.page = page
            this.premiseToSelect = page.getByPlaceholder('Premises Name')
            this.desiredPremiseSelect = page.locator("//mat-cell/a")
            this.fillReportButton = page.locator("//button[@color ='warn']")
        }

        async searchPremise(selectedPremise: string){
            await this.premiseToSelect.fill(selectedPremise)
            await this.premiseToSelect.press('Enter');
        }

        async waitForPremiseSearchBar(){
            await this.premiseToSelect.waitFor({state: 'visible'})
        }


        async clickOnDesiredPremise(selectedPremise: string){
            await this.desiredPremiseSelect.filter({hasText: selectedPremise}).click()
        }

        async clickOnFillReport(){
            await this.fillReportButton.click()
        }
}