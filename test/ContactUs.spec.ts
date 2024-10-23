import { test, expect } from '@playwright/test';
import { AutomationExercise } from '../PageFactory/PageRepository/AutomationExercise';

test('Fill the Contact details',async({page})=>{
  const contactUs = new AutomationExercise(page)
  await contactUs.login()
  await contactUs.submitContactForm("DOCSample.doc")

})