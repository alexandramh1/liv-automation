import { expect, type Locator, type Page } from '@playwright/test';
import generateRandomString from '../fixtures/utils/generateJobID';
import { FillReportPage } from './fillreport.page';

export class DeficientSectionPage {
    readonly page: Page;
    readonly deficiencyTitleInput: Locator;
    readonly deficiencyDescripionInput: Locator;
    readonly deficiencyClassificationDropdown : Locator;

    constructor(page: Page){
        this.page = page
        this.deficiencyTitleInput = page.getByPlaceholder('Deficiency title')
        this.deficiencyDescripionInput = page.getByPlaceholder('Write...')
        this.deficiencyClassificationDropdown = page.getByPlaceholder('Select Classification')
    }

    async fillDeficiencyTitle(){
        await this.deficiencyTitleInput.fill(generateRandomString())
    }

    async fillDeficiencyDescription(){
        await this.deficiencyDescripionInput.fill(generateRandomString())
    }

    async clickOnDeficiencyDropdown(){
       await this.deficiencyClassificationDropdown.click() 
    }
    
    async isDeficiencyTitleProvided(deficiency_clasification:string | undefined):Promise<void>{
        if(!deficiency_clasification) return;
        await this.fillDeficiencyTitle()
        await this.fillDeficiencyDescription()
        await this.clickOnDeficiencyDropdown()
        const fillReportPage = new FillReportPage(this.page);
        await fillReportPage.selectOptionFromDropdown(deficiency_clasification);
    }
}
