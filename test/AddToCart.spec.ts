import { test, expect } from '@playwright/test';
import { AutomationExercise } from '../PageFactory/PageRepository/AutomationExercise';

test('Add product to cart and vrify it.', async ({ page }) => {
  const addProduct = new AutomationExercise(page)
  await addProduct.login()
  await addProduct.searchProduct()
  await addProduct.addProduct()

})