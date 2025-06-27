import { expect, type Locator, type Page } from '@playwright/test';
import generateRandomString from '../fixtures/utils/generateJobID';
import path from 'path';
import generateDate from '../fixtures/utils/generateDates';

export class FillReportPage {
    readonly page: Page;
    readonly formFieldsList: Locator;
    readonly optionToSelect: Locator;
    readonly jobID: Locator;
    readonly finalSubmitButton: Locator;
    readonly uploadFileInput: Locator;
    readonly calendarButton: Locator;
    readonly calendarTable: Locator;

    constructor(page: Page) {
        this.page = page
        this.optionToSelect = page.locator("//span[@class='mat-option-text']")
        this.jobID = page.getByPlaceholder("Enter Job ID")
        this.finalSubmitButton = page.locator("//button[@style = 'min-width: 50px']")
        //this.uploadFileInput = page.locator('mat-card-content').filter({ hasText: 'Fire Alarm SystemPlease' }).locator('input[type="file"]')
        this.uploadFileInput = page.locator('//app-file-picker[@test-data="inspection_report_upload"]//input')
        this.calendarButton = page.locator('//button[@aria-label="Open calendar"]')
        this.calendarTable = page.locator("//td/div")
    }

    async selectFormField(fieldName: string) {
        const formField = this.page.locator(`[test-data="${fieldName}"]`)
        formField.click()
    }

    async selectOptionFromDropdown(optionToSelect: string | undefined) {
        if (!optionToSelect) return;
        await this.optionToSelect.filter({ hasText: optionToSelect }).click();
        await this.page.keyboard.press('Escape')
    }

    async fillJobID() {
        await this.jobID.fill(generateRandomString())
    }
    async clickOnFinalSubmitButton() {
        await this.finalSubmitButton.click()
    }
    async uploadFile() {
        await this.uploadFileInput.setInputFiles(path.join(process.cwd(), '/assets/testdoc.pdf'))
    }
    async selectDateFromCalendar() {
        await this.calendarButton.click()
        await this.calendarTable.filter({ hasText: generateDate() }).first().click()
    }

}
