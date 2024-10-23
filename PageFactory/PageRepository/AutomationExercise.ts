import test, { expect, Locator, Page, Browser } from '@playwright/test';
import { AutomationExerciseObjects } from "../ObjectRepository/AutomationExerciseObjects";
import exp from 'constants';
import FileUtils from '../../Utils/FileUtils';
let filePath: string = './DataFolder/FileTypes/'
export class AutomationExercise extends AutomationExerciseObjects {
    readonly page: Page;
    constructor(page: Page) {
        super()
        this.page = page;//to activate page into this class 

    }
    async login() {
        const loginValues = await FileUtils.getPropertyFile("LoginData")
        let propertyValue = (await loginValues).getAllProperties()
        await this.page.goto(propertyValue.Link)
        await this.page.locator(AutomationExerciseObjects.LOGINBUTTON).click()
        await this.page.locator(AutomationExerciseObjects.EMAILADDRESS).fill(propertyValue.EmailId)
        await this.page.locator(AutomationExerciseObjects.PASSWORD).fill(propertyValue.Password)
        await this.page.waitForTimeout(1000)
        await this.page.locator(AutomationExerciseObjects.LOGIN).click()
        await this.page.waitForTimeout(1800)
        expect(await this.page.getByRole('link', { name: ' Logout' }).isVisible()).toBeTruthy()
        expect(await this.page.getByText('Logged in as').isVisible()).toBeTruthy()

    }

    async submitContactForm(file: string) {
        const contactDetails = await FileUtils.getPropertyFile("ContactDetails")
        let propertyValue = (await contactDetails).getAllProperties()
        await this.page.locator(AutomationExerciseObjects.ContactButton).click()
        await this.page.locator(AutomationExerciseObjects.Name).fill(propertyValue.Name)
        await this.page.locator(AutomationExerciseObjects.Email).fill(propertyValue.Email)
        await this.page.locator(AutomationExerciseObjects.SubjectMessage).fill(propertyValue.SubjectMessage)
        await this.page.locator(AutomationExerciseObjects.Message).fill(propertyValue.Message)
        await this.page.locator(AutomationExerciseObjects.ChooseFile).setInputFiles(filePath + file + '')
        await this.page.waitForTimeout(1800)

        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(() => { });
        });
        await this.page.locator(AutomationExerciseObjects.SubmitButton).click()
        await this.page.waitForTimeout(2800)
        await this.page.locator(AutomationExerciseObjects.ContactPage).scrollIntoViewIfNeeded()
        expect(await this.page.locator(AutomationExerciseObjects.ContactPage).getByText('Success! Your details have been submitted successfully.').isVisible()).toBeTruthy()
        expect(await this.page.locator(AutomationExerciseObjects.HomePageIcon).isVisible()).toBeTruthy()
        await this.page.locator(AutomationExerciseObjects.HomePageIcon).click()
    }

    async searchProduct() {
        const searchProducts = await FileUtils.getPropertyFile("SearchProducts")
        let propertyValue = (await searchProducts).getAllProperties()
        await this.page.locator(AutomationExerciseObjects.Products).click()
        await this.page.locator(AutomationExerciseObjects.SearchProduct).fill(propertyValue.SearchProduct)
        await this.page.locator(AutomationExerciseObjects.SearchButton).click()
        // await expect(this.page).toHaveURL(propertyValue.PageUrl)
        expect(await this.page.locator(AutomationExerciseObjects.SearchedProducts).isVisible()).toBeTruthy()

    }

    async addProduct() {
        await this.page.locator(AutomationExerciseObjects.AddItem).scrollIntoViewIfNeeded()
        await this.page.locator(AutomationExerciseObjects.ViewProduct).click()
        await this.page.locator(AutomationExerciseObjects.AddToCart).click()
        await this.page.waitForTimeout(800)
        expect(await this.page.getByRole('heading', { name: 'Added!' }).isVisible()).toBeTruthy()
        expect(await this.page.getByText('Your product has been added').isVisible()).toBeTruthy()
        expect(await this.page.getByRole('link', { name: 'View Cart' }).isVisible()).toBeTruthy()
        expect(await this.page.getByRole('button', { name: 'Continue Shopping' }).isVisible()).toBeTruthy()
        await this.page.getByRole('link', { name: 'View Cart' }).click()
        await this.page.waitForTimeout(2800)
        expect(await this.page.getByRole('link', { name: 'Long Maxi Tulle Fancy Dress' }).isVisible()).toBeTruthy()


    }


}