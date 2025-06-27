import {expect, type Locator, type Page} from '@playwright/test';

export class ReportDetailsPage{

    readonly page: Page;
    readonly reportAttachedFile : Locator;
    readonly pdfSizeValue : Locator;

        constructor(page: Page){
            this.page = page
            this.reportAttachedFile = page.locator('//div[@class="page"]')
            this.pdfSizeValue = page.locator('')
        }

        async checkLoadedStatus(){
            const dataLoadedStatus = await this.reportAttachedFile.getAttribute('data-loaded')
            if(dataLoadedStatus=='true'){
                
            }
        }

        async getPDFsizeValue(){
            
        }
}