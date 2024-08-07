import {expect, type Locator, type Page} from '@playwright/test';


export class FillReportPage{
    readonly page: Page;
    readonly formFieldsList: Locator;
    readonly optionToSelect: Locator;

        constructor(page: Page){
            this.page = page
            this.optionToSelect = page.locator("//span[@class='mat-option-text']")
        }
    
    async selectFormField(fieldName : string){
        await this.page.locator(`//mat-form-field[@test-id ="${fieldName}"]`).click()  
    }

    async selectOptionFromDropdown(optionToSelect: string){
        await this.optionToSelect.filter({hasText: optionToSelect}).click()
    }
}
