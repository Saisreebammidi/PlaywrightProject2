import { test, expect } from '@playwright/test';
import { AutomationExercise } from '../PageFactory/PageRepository/AutomationExercise';

test('Searach the products', async ({ page }) => {
  const searchProduct = new AutomationExercise(page)
  await searchProduct.login()
  await searchProduct.searchProduct()
  await searchProduct.addProduct()

})