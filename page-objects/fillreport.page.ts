import {expect, type Locator, type Page} from '@playwright/test';


export class FillReportPage{
    readonly page: Page;
    readonly formFieldsList: Locator;

        constructor(page: Page){
            this.page = page
        }
    
    async selectFormField(fieldName : string){
        await this.page.locator(`//mat-form-field[@test-id ="${fieldName}"]`).click()  
    }
}
